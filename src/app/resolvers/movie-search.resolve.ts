import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MovieInfoService } from 'app/services/movie-info.service';

@Injectable()
export class MovieSearchResolve implements Resolve<any> {

  constructor(private movieInfoService: MovieInfoService) {}

  resolve(route: ActivatedRouteSnapshot) {
      if(route.paramMap.get('query')) {
        return this.movieInfoService.getMovies(route.paramMap.get('query'));
      } else if (route.paramMap.get('category')) {
        return this.movieInfoService.getCategory(route.paramMap.get('category'));
      } else if (route.paramMap.get('similarID')) {
        return this.movieInfoService.getSimilarMovies(route.paramMap.get('similarID'));
      }
  }
}