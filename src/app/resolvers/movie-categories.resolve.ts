import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MovieInfoService } from 'app/services/movie-info.service';

@Injectable()
export class MovieCategoryResolve implements Resolve<any> {

  constructor(private movieInfoService: MovieInfoService) {}

  resolve() {
    let promises = []
    promises.push(this.movieInfoService.getNetflixMovies().toPromise().then((resp: any) => Object.assign(resp, {category: 'netflix', categoryTitle: 'Most Popular on Netflix'})));        
    promises.push(this.movieInfoService.getCategory('popular').toPromise().then((resp: any) => Object.assign(resp, {category: 'popular', categoryTitle: 'Most Popular Movies'})));
    promises.push(this.movieInfoService.getCategory('g-rated').toPromise().then((resp: any) => Object.assign(resp, {category: 'g-rated', categoryTitle: 'Top Rated Movies for Kids'})));
    promises.push(this.movieInfoService.getCategory('comedy').toPromise().then((resp: any) => Object.assign(resp, {category: 'comedy', categoryTitle: 'Top Rated Comedies'})));
    promises.push(this.movieInfoService.getCategory('top-rated').toPromise().then((resp: any) => Object.assign(resp, {category: 'top-rated', categoryTitle: 'Top Rated Movies of All Time'})));
    promises.push(this.movieInfoService.getCategory('current').toPromise().then((resp: any) => Object.assign(resp, {category: 'current', categoryTitle: 'Top Rated Movies of the Year'})));
    promises.push(this.movieInfoService.getCategory('sci-fi').toPromise().then((resp: any) => Object.assign(resp, {category: 'sci-fi', categoryTitle: 'Top Rated Sci-Fi Movies'})));
    return Promise.all(promises);
  }
}