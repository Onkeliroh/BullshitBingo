import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decompressString'
})
export class DecompressStringPipe implements PipeTransform {
  lzjs = require('lzjs');

  transform(value: any): any {
    return this.lzjs.decompress(value);
  }

}
