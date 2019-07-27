import { Component, OnInit } from '@angular/core';
import { GameSupplierService } from 'src/app/services/game-supplier.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent {

  gameSupplierService: GameSupplierService;

  wordItemGrid: Array<WordItem[]> = [];

  constructor(gameSupplierService: GameSupplierService) {
    this.gameSupplierService = gameSupplierService;

    const wordItems = this.gameSupplierService.getRandomOrderedList();

    for (var _i = 0; _i < wordItems.length; _i = _i + 5) {
      this.wordItemGrid.push(wordItems.slice(_i, _i + 5));
      console.log(this.wordItemGrid);
    }
  }
}
