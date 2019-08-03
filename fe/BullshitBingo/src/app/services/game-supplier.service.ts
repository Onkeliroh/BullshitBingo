import { Injectable } from '@angular/core';
import WordLists from '../../assets/wordLists.json';
import { WordListItem } from './word-list-item.js';
import { WordItem } from './word-item.js';

@Injectable({
  providedIn: 'root'
})
export class GameSupplierService {
  wordLists: WordListItem[] = WordLists;

  public getRandomizedWordlist(gameSeed?: string): WordItem[] {
    let wordString: string = this.wordLists[0].list;
    if (gameSeed != null) {
      const filteredList = this.wordLists.filter(x => x.name === gameSeed);
      if (filteredList.length > 0) {
        wordString = filteredList[0].list;
      }
      // this.wordLists.forEach(element => {
      //   if (element.name === gameSeed) {
      //     wordString = element.list;
      //   }
      // });
    }

    if (wordString.length === 0) {
      console.log('word list for game seed not found. using default list');
      return;
    }

    const list = Array<WordItem>();

    wordString.split(',').forEach(element => {
      list.push({ word: element, isChecked: false });
    });
    return list.sort(() => 0.5 - Math.random());
  }
}
