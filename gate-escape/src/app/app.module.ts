import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { FlexLayoutModule } from "@angular/flex-layout";
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AnswerCheckerComponent } from './answer-checker/answer-checker.component';
import { EndCheckerComponent } from './end-checker/end-checker.component';
import { DialogTableComponent } from './dialog-table/dialog-table.component';

@NgModule({
    declarations: [
        AppComponent,
        AppNavbarComponent,
        AnswerCheckerComponent,
        EndCheckerComponent,
        DialogTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        DragDropModule,
        MatProgressBarModule,
        MatSnackBarModule,
        FormsModule,
        MatDialogModule,
        MatTableModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
