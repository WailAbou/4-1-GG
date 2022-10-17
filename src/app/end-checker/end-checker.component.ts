import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogTableComponent } from '../dialog-table/dialog-table.component';

@Component({
    selector: 'app-end-checker',
    templateUrl: './end-checker.component.html',
    styleUrls: ['./end-checker.component.sass'],
    encapsulation: ViewEncapsulation.None
})
export class EndCheckerComponent implements OnInit {

    @Input()
    public answer: string[] = [];
    public letters: string[] = [];
    public inputs: string[] = [];
    public solution: string = 'DECIPHERER';

    constructor(private readonly _snackBar: MatSnackBar, private readonly _dialog: MatDialog) { }

    public ngOnInit(): void {
        this.letters = [...this.answer];
        this.inputs = Array(this.letters.length).fill('')
    }

    public drop(event: CdkDragDrop<string[]>, i: number): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            this.inputs.splice(i, 1);
            transferArrayItem(event.previousContainer.data, this.inputs, event.previousIndex, i);
        }

        const endInput = this.inputs.join('');
        if (endInput.length == this.solution.length) {
            if (endInput == this.solution) {
                this._snackBar.open("Juiste volgorde!", "Sluiten", { duration: 2000, panelClass: ['good-snackbar'] });
                this._dialog.open(DialogTableComponent, {
                    maxWidth: '80vw',
                    width: '600px',
                    data: { title: 'Je bent ontsnapt!', text: 'Goed gedaan!' }
                });
            } else {
                this._snackBar.open("Onjuiste volgorde!", "Sluiten", { duration: 2000, panelClass: ['bad-snackbar'] });
            }
        }
    }

    public reset(): void {
        this.letters = [...this.answer];
        this.inputs = Array(this.letters.length).fill('')
    }

}
