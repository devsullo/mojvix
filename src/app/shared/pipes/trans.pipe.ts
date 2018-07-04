const transObj = window['VIX_MESSAGES'] || {};
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trans'
})
export class TransPipe implements PipeTransform {
  transform(value: any, key?: any): any {
    if (key) {
      return transObj[key][value] || value;
    } else {
      return transObj[value] || value;
    }
  }
}
