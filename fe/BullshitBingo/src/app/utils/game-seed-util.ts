export class GameSeedUtil {
  static lzjs = require('lzjs');

  static generateGameSeed(value: string) {
    return this.lzjs.compress(btoa(value));
  }

  static extractGameSeed(value: string): string {
    return atob(this.lzjs.decompress(value));
  }
}
