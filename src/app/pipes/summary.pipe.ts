import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    const maxLength = args;
    if (value.length < maxLength) {
      return value;
    } else if (value.indexOf('.') === -1) {
      return value.slice(0, maxLength) + '...'
    }
    else {
      let tempLength = 0, length = 0, counter = 0;
      while (tempLength < maxLength && counter < 10) {
        length = tempLength;
        tempLength = value.indexOf('.', length + 1);
        counter++;
      }
      return value.slice(0, length + 1);
    }
  }

}
