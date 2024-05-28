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
    console.log(this.completeBoard());
    console.log(this.isValidSudoku());
  }

  completeBoard(): boolean {
    var N = 9;
    for(var i = 0; i < N; i++) {
      for(var j = 0; j < N; j++) {
        if (this.sudokuData[i][j] == 0) {
          return false
        }
      }
    }
      return true;
  }

  isValidSudoku(): boolean {
    var N = 9;

    if (this.completeBoard() == false) {
      return false;
    }

    var unique = Array(N + 1).fill(false);

    //rows
    for(var i = 0; i < N; i++) {
      unique = Array(N+1).fill(false);

      for(var j = 0; j < N; j++) {
        var z = this.sudokuData[i][j];

        if (unique[z]) {
          return false;
        }
        unique[z] = true;
      }
    }
    console.log("rows are good")
    //colums
    for (var i = 0; i < N; i++) {
      unique = Array(N+1).fill(false);

      for (var j = 0; j < N; j++) {
        var z = this.sudokuData[j][i];

        if(unique[z]) {
          return false;
        }
        unique[z] = true;
      }
    }
    console.log("cols are good")
    // 3 * 3 blocks
    for (var i = 0; i < N - 2; i += 3) {
      for (var j = 0; j < N - 2; j+= 3) {

        unique = Array(N+1).fill(false);

        for(var k = 0; k < 3; k++) {
          for(var l = 0; l < 3; l++) {

            var X = i + k;

            var Y = j + l;

            var Z = this.sudokuData[X][Y];

            if (unique[Z]) {
              return false;
            }
            unique[Z] = true;
          }
        }
      }
    }
    return true;
  }
}
