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

    console.log(this.gameSupplierService.wordItems.length);
    for (var _i = 0; _i < this.gameSupplierService.wordItems.length; _i = _i + 5) {
      this.wordItemGrid.push(this.gameSupplierService.wordItems.slice(_i, _i + 5));
      console.log(this.wordItemGrid);
    }
  }
}
