import { Component } from '@angular/core';
import { GameSeedUtil } from 'src/app/utils/game-seed-util';

@Component({
  selector: 'app-game-editor',
  templateUrl: './game-editor.component.html',
  styles: ['#tagcounter { font-weight: bold; }']
})
export class GameEditorComponent {
  items = [];

  generateGameSeed(): string {
    const gameSeedString = [...this.items.filter(x => typeof (x) === 'string').map(x => x),
    ...this.items.filter(x => typeof (x) === 'object').map((x: any) => x.value)].join(',');
    return GameSeedUtil.generateGameSeed(gameSeedString);
  }

}
