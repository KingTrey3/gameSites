import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss'
})
export class SudokuComponent {
  sudokuData: number[][] = [];

  constructor() {
    this.initializeSudokuData();
  }


  initializeSudokuData() {
    // Initialize sudokuData with null values (user inputs will replace these)
    for (let i = 0; i < 9; i++) {
      this.sudokuData[i] = [];
      for (let j = 0; j < 9; j++) {
        this.sudokuData[i][j] = 0; // Initial value is null
      }
    }
  }
  submitSudoku() {
    console.log(this.sudokuData);
  }
}
