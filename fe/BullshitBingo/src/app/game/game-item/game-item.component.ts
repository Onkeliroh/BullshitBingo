import { Component, Input, HostListener } from '@angular/core';
import { WordItem } from 'src/app/services/word-item';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {

  @Input()
  wordItem: WordItem;

  @HostListener('click') onclick() {
    this.wordItem.isChecked = !this.wordItem.isChecked;
  }
}
