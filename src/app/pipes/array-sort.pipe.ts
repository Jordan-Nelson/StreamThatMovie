import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySort'
})
export class ArraySortPipe implements PipeTransform {

  transform(array: any[], field: string, reverse: boolean): any[] {
    if (!array || !array.length) {
      return null;
    } else if (!field) {
      return array;
    }
    let fieldIsFloat = array.reduce(function (sum, value) {
      if (!value[field] || (sum && !isNaN(parseFloat(value[field])))) {
        return true;
      }
      return false;
    })
    if (fieldIsFloat) {
      reverse = !reverse
    }
    array.sort((a: any, b: any) => {
      if (!a[field] && !b[field]) {
        return 0;
      } else if (!a[field]) {
        return 1;
      } else if (!b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return reverse ? 1 : -1;
      } else if (a[field] > b[field]) {
        return reverse ? -1 : 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
