import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    public difficulties: string[] = ['makkelijk', 'makkelijk', 'gemiddeld', 'gemiddeld', 'moeilijk'];

    public headers: string[] = ['Rij', 'AND Gates', 'OR Gates', 'NOT Gates', 'XOR Gates', 'NAND Gates'];
    public properties: string[] = ['row', 'ands', 'ors', 'nots', 'xors', 'nands'];
    public displayedColumns: string[] = [];
    public dataSource: TableElement[] = [];

    public get percentageDone() {
        return this.currentQuestion / this.totalQuestions * 100;
    }

    public get lastQuestion() {
        return this.currentQuestion == this.totalQuestions;
    }

    constructor(private readonly snackBar: MatSnackBar) { }

    public ngOnInit(): void {
        this.nextLevel();
    }

    private nextLevel(): void {
        this.currentQuestion++;
        this.displayedColumns = levels[this.currentQuestion - 1].displayedColumns;
        this.dataSource = levels[this.currentQuestion - 1].dataSource;
    }

    public prevQuestion(): void {
        this.currentQuestion = Math.max(1, this.currentQuestion - 1);
    }

    public nextQuestion(): void {
        this.checkAnswer(() => this.nextLevel());
    }

    public finishQuiz(): void {
        this.checkAnswer(() => this.endQuestion.emit());
    }

    private checkAnswer(onGood: Function) {
        if (answerIsGood(this.dataSource, levels[this.currentQuestion - 1].answer)) {
            this.snackBar.open(this.lastQuestion ? "Nog een laatste puzzel!" : "Goede antwoord!", "Sluiten", { duration: 2000, panelClass: ['good-snackbar'] });
            onGood();
        } else {
            this.snackBar.open("Fout antwoord!", "Sluiten", { duration: 2000, panelClass: ['bad-snackbar'] });
        }
    }

}
