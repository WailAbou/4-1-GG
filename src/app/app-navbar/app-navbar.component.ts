import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTableComponent } from '../dialog-table/dialog-table.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './app-navbar.component.html',
    styleUrls: ['./app-navbar.component.sass']
})
export class AppNavbarComponent {

    constructor(public dialog: MatDialog) { }

    public openTable(): void {
        this.dialog.open(DialogTableComponent, {
            maxWidth: '80vw',
            width: '600px',
            data: { title: 'Hulp Nodig?', text: 'Neem met een van de organisators contact voor het juiste antwoord of andere hulp.' }
        });
    }
}
