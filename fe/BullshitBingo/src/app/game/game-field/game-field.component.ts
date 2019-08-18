import { Component, OnInit } from '@angular/core';
import { GameSupplierService } from 'src/app/services/game-supplier.service';
import { WordItem } from 'src/app/services/word-item';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit {
  private gameSupplierService: GameSupplierService;
  private route: ActivatedRoute;
  private router: Router;

  wordItemGrid: Array<WordItem[]> = [];
  isGameWon = false;

  private gameSeed: string;
  gameseedUrl: string;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(x => (this.gameSeed = x.get('seed')));
    console.log('GameSeed: ' + this.gameSeed);

    const wordItems = this.gameSupplierService.getRandomizedWordlist(
      this.gameSeed
    );

    // this.gameseedUrl = document.location.protocol + '//' + document.location.hostname + ':' + document.location.port + this.router.url;
    this.gameseedUrl = location.protocol + '//' + location.host + this.router.url;

    for (let i = 0; i < wordItems.length; i = i + 5) {
      this.wordItemGrid.push(wordItems.slice(i, i + 5));
    }
  }

  constructor(gameSupplierService: GameSupplierService, route: ActivatedRoute, router: Router) {
    this.gameSupplierService = gameSupplierService;
    this.route = route;
    this.router = router;
  }

  onWordItemCheck(wordItem: WordItem) {
    this.isGameWon = this.checkBingo();
  }

  private checkBingo(): boolean {
    return (
      this.checkRowBingo() ||
      this.checkDiagonalBingo() ||
      this.checkColumnBingo()
    );
  }

  private checkColumnBingo() {
    for (let i = 0; i < this.wordItemGrid.length; i++) {
      let isWon = true;
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
      if (
        this.wordItemGrid[index].map(x => x.isChecked).reduce((a, b) => a && b)
      ) {
        return true;
      }
    }
    return false;
  }

  private checkDiagonalBingo(): boolean {
    const rowLength = this.wordItemGrid[0].length;
    let wordItemsList = Array<WordItem>();
    this.wordItemGrid.forEach(
      row => (wordItemsList = wordItemsList.concat(row))
    );

    let isWon = false;

    // top left to bottom right
    for (let index = 0; index < wordItemsList.length; index = index + rowLength + 1) {
      isWon = wordItemsList[index].isChecked;
      if (!isWon) { break; }
    }
    if (isWon) { return isWon; }

    // top right to bottom left
    for (let index = rowLength - 1; index < wordItemsList.length - 1; index = index + rowLength - 1) {
      isWon = wordItemsList[index].isChecked;
      if (!isWon) { break; }
    }

    return isWon;
  }

  copyGameSeedUrlToClipboard($event) {
    this.copyStringToClipboard(this.gameseedUrl);
  }

  private copyStringToClipboard(str) {
    // Create new element
    const el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
  }
}
