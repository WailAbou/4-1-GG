import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface TableElement {
    number: number;
    letter: string;
}

@Component({
    selector: 'app-dialog-table',
    templateUrl: './dialog-table.component.html',
    styleUrls: ['./dialog-table.component.sass']
})
export class DialogTableComponent {

    public displayedColumns: string[] = ['number', 'letter'];
    public dataSource: TableElement[] = [
        { number: 1, letter: 'A' },
        { number: 2, letter: 'B' },
        { number: 3, letter: 'C' },
    ];

    constructor(public dialogRef: MatDialogRef<DialogTableComponent>) { }

    public close(): void {
        this.dialogRef.close();
    }

}
