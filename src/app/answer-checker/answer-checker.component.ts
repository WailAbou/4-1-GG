import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogTableComponent } from '../dialog-table/dialog-table.component';
import { answerIsGood, levels, TableElement } from './levels';


@Component({
    selector: 'app-answer-checker',
    templateUrl: './answer-checker.component.html',
    styleUrls: ['./answer-checker.component.sass'],
    encapsulation: ViewEncapsulation.None
})
export class AnswerCheckerComponent implements OnInit {

    @Input()
    public letters: string[] = [];

    @Output()
    public endQuestion: EventEmitter<void> = new EventEmitter<void>();

    public totalQuestions: number = 5;
    public currentQuestion: number = 0;
    public difficulties: string[] = ['makkelijk', 'makkelijk', 'makkelijk', 'makkelijk', 'gemiddeld', 'gemiddeld', 'gemiddeld', 'gemiddeld', 'moeilijk', 'moeilijk'];

    public headers: string[] = ['Rij', 'AND Gates', 'OR Gates', 'NOT Gates', 'XOR Gates', 'NAND Gates'];
    public properties: string[] = ['row', 'ands', 'ors', 'nots', 'xors', 'nands'];
    public displayedColumns: string[] = [];
    public dataSource: TableElement[] = [];

    public getHeader(columnName: string): string {
        const i = this.properties.indexOf(columnName);
        return this.headers[i];
    }

    public get percentageDone() {
        return this.currentQuestion / this.totalQuestions * 100;
    }

    public get lastQuestion() {
        return this.currentQuestion == this.totalQuestions;
    }

    constructor(private readonly _snackBar: MatSnackBar, private readonly _dialog: MatDialog) { }

    public ngOnInit(): void {
        this.nextLevel();
    }

    private nextLevel(): void {
        this.currentQuestion++;
        const level = levels[this.currentQuestion - 1];
        this.displayedColumns = level.displayedColumns;
        this.dataSource = level.dataSource;
        this._dialog.open(DialogTableComponent, {
            maxWidth: '80vw',
            width: '600px',
            data: { title: level.title, text: level.text }
        });
    }

    private endLevel(): void {
        this.endQuestion.emit();
        this._dialog.open(DialogTableComponent, {
            maxWidth: '80vw',
            width: '600px',
            data: { title: 'Laatste level: BUITENHEK', text: 'Tijdens onze gesprekken heb ik je een aantal hints gegeven in de vorm van letters, deze heb je nu tot je beschikking... Ontcijfer het woord en roep deze luidop uit🔊 om de stem geactiveerde deur te openen, veel succes ik zie je aan de andere kant! Hopelijk...' }
        });
    }

    public prevQuestion(): void {
        this.currentQuestion = Math.max(1, this.currentQuestion - 1);
    }

    public nextQuestion(): void {
        this.checkAnswer(() => this.nextLevel());
    }

    public finishQuiz(): void {
        this.checkAnswer(() => this.endLevel());
    }

    private checkAnswer(onGood: Function) {
        if (answerIsGood(this.dataSource, levels[this.currentQuestion - 1].answer)) {
            this._snackBar.open(this.lastQuestion ? "Nog een laatste puzzel!" : "Goede antwoord!", "Sluiten", { duration: 2000, panelClass: ['good-snackbar'] });
            onGood();
        } else {
            this._snackBar.open("Fout antwoord!", "Sluiten", { duration: 2000, panelClass: ['bad-snackbar'] });
        }
    }

}
