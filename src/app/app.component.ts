import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    public letters: string[] = ['R', 'E', 'E', 'H', 'C', 'D', 'I', 'R', 'P', 'E'];
    public endChecker: boolean = false;

    public doEndChecker() {
        this.endChecker = true;
    }
}
