import { Component, OnInit } from '@angular/core';
import { join } from 'path';
import { GameSeedUtil } from 'src/app/utils/game-seed-util';

@Component({
  selector: 'app-game-editor',
  templateUrl: './game-editor.component.html',
  styles: ['#tagcounter { font-weight: bold; }']
})
export class GameEditorComponent implements OnInit {
  items = ['Tschüss', 'Production', 'RegTests', 'RC *', 'DEV *', 'Git', 'Kubernetes', 'Docker', 'Rot', 'Gruen', 'unveraendert', 'PO', 'Problem', 'Happy Path', 'Meeting', 'Wir gucken uns das an', 'Netzwerk', 'Frage', 'Sprint', 'Release', 'Legacy', 'WAS', 'Email', 'historisch gewachsen', 'Bug'];
  constructor() { }

  ngOnInit() {
  }

  generateGameSeed(): string {
    return GameSeedUtil.generateGameSeed(this.items.join(','));
  }

}
