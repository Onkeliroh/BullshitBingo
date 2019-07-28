import { Injectable } from '@angular/core';
import { WordItem } from './word-item';
import * as WordLists from '../../assets/wordLists.json';

@Injectable({
  providedIn: 'root'
})
export class GameSupplierService {

  constructor() {

  }

  public getRandomizedWordlist(gameSeed?: string): WordItem[] {
    const wordString: string = WordLists[0].list;

    const list = Array<WordItem>();

    wordString.split(',').forEach(element => {
      list.push({ word: element });
    });
    return list.sort(() => .5 - Math.random());
  }
}
