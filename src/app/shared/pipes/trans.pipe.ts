const transObj = window['__VIX_MESSAGES__'] || {};
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trans'
})
export class TransPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return transObj[value];
  }

}
