import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { WordItem } from 'src/app/services/word-item';


@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {

  @Input()
  wordItem: WordItem;

  @Output()
  wordItemCheckedEvent = new EventEmitter<WordItem>();

  @HostListener('click') onclick() {
    this.wordItem.isChecked = !this.wordItem.isChecked;
    this.wordItemCheckedEvent.emit(this.wordItem);
  }
}
