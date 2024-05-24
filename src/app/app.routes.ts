import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SudokuComponent } from './sudoku/sudoku.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sudoku',
        component: SudokuComponent
    }
];
