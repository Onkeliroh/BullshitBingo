import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameSupplierService {

  public wordItems: WordItem[];

  constructor() {
    this.wordItems = [
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' },
      { isChecked: false, word: 'bla' }
    ];
  }
}
