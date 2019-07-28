import { Component, OnInit } from '@angular/core';
import { GameSupplierService } from 'src/app/services/game-supplier.service';
import { WordItem } from 'src/app/services/word-item';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent {

  gameSupplierService: GameSupplierService;

  wordItemGrid: Array<WordItem[]> = [];
  isGameWon = false;

  constructor(gameSupplierService: GameSupplierService) {
    this.gameSupplierService = gameSupplierService;

    const wordItems = this.gameSupplierService.getRandomizedWordlist();


    for (let _i = 0; _i < wordItems.length; _i = _i + 5) {
      this.wordItemGrid.push(wordItems.slice(_i, _i + 5));
      console.log(this.wordItemGrid);
    }
  }

  onWordItemCheck(wordItem: WordItem) {
    this.isGameWon = this.checkBingo();
  }

  private checkBingo(): boolean {
    return this.checkRowBingo() || this.checkDiagonalBingo() || this.checkColumnBingo();
  }

  private checkColumnBingo() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.wordItemGrid.length; i++) {
      let isWon = true;
      // tslint:disable-next-line: prefer-for-of
      for (let y = 0; y < this.wordItemGrid[i].length; y++) {
        isWon = isWon && this.wordItemGrid[y][i].isChecked;
      }
      if (isWon) {
        return true;
      }
    }
    return false;
  }

  private checkRowBingo(): boolean {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.wordItemGrid.length; index++) {
      if (this.wordItemGrid[index].map(x => x.isChecked).reduce((a, b) => a && b)) {
        return true;
      }
    }
    return false;
  }

  private checkDiagonalBingo(): boolean {
    let wordItemsList = Array<WordItem>();
    this.wordItemGrid.forEach(row => wordItemsList = wordItemsList.concat(row));
    let isWon =
      wordItemsList[0].isChecked &&
      wordItemsList[6].isChecked &&
      wordItemsList[12].isChecked &&
      wordItemsList[18].isChecked &&
      wordItemsList[24].isChecked;
    if (isWon) { return true; }
    isWon =
      wordItemsList[4].isChecked &&
      wordItemsList[8].isChecked &&
      wordItemsList[12].isChecked &&
      wordItemsList[16].isChecked &&
      wordItemsList[20].isChecked;
    return isWon;
  }
}
