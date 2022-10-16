import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

    public title: string = "";
    public text: string = "";

    constructor(public dialogRef: MatDialogRef<DialogTableComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.title = data.title;
        this.text = data.text;
    }

    public close(): void {
        this.dialogRef.close();
    }

}
