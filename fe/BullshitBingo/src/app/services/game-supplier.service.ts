import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameSupplierService {

  public wordItems: WordItem[];

  constructor() {
    this.wordItems = [
      { word: 'Tschüss' },
      { word: 'Production' },
      { word: 'RegTests' },
      { word: 'RC *' },
      { word: 'DEV *' },
      { word: 'Git' },
      { word: 'Kubernetes' },
      { word: 'Docker' },
      { word: 'Rot' },
      { word: 'Grün' },
      { word: 'unverändert' },
      { word: 'PO' },
      { word: 'Problem' },
      { word: 'Happy Path' },
      { word: 'Meeting' },
      { word: 'Wir gucken uns das an' },
      { word: 'Netzwerk' },
      { word: 'Frage' },
      { word: 'Sprint' },
      { word: 'Release' },
      { word: 'Legacy' },
      { word: 'WAS' },
      { word: 'Email' },
      { word: 'historisch gewachsen' },
      { word: 'Bug' }
    ];
  }
}
