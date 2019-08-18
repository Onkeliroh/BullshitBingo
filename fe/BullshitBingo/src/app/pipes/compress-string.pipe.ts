import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compressString'
})
export class CompressStringPipe implements PipeTransform {
  lzjs = require('lzjs');

  transform(value: any): any {
    if (Array.isArray(value)) {
      return this.lzjs.compress(value.join(','));
    }
    return this.lzjs.compress(value);
  }

}
