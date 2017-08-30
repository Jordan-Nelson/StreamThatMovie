import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultFilter'
})
export class ResultFilterPipe implements PipeTransform {

  transform(results: any): object {
    if (results === null) {
      return null;
    }
    for (let i = 0; i < results.length; i++) {
      if (results[i].poster_path === null || results[i].poster_path === '' ||
          results[i].title === null || results[i].title === '' ||
          results[i].release_date === null || results[i].release_date === '' ||
          results[i].vote_count < 10) {
        results.splice(i, 1);
        i--;
      }
    }
    return results;
  }

}
