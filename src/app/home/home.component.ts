import { Component, OnInit } from '@angular/core';

import { Movie } from '../shared/movie';
import { MovieInfoService } from '../shared/movie-info.service';


@Component({
  selector: 'stream-search',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// export class SearchComponent implements OnInit {
export class HomeComponent implements OnInit {

  results: Object;
  movies: Movie[];
  popularMovies: Movie[];
  gRatedMovies: Movie[];
  comedyMovies: Movie[];
  topRatedMovies: Movie[];
  currentMovies: Movie[];
  scifiMovies: Movie[];

  constructor(private movieInfoService: MovieInfoService) {

    this.movieInfoService.getPopularMovies()
      .subscribe(
        popularMovies => this.popularMovies = popularMovies,
        // error =>  this.errorMessage = <any>error
    );

    this.movieInfoService.getGRatedMovies()
      .subscribe(
        gRatedMovies => this.gRatedMovies = gRatedMovies,
        // error =>  this.errorMessage = <any>error
    );

    this.movieInfoService.getComedyMovies()
      .subscribe(
        comedyMovies => this.comedyMovies = comedyMovies,
        // error =>  this.errorMessage = <any>error
    );

    this.movieInfoService.getTopRated()
      .subscribe(
        topRatedMovies => this.topRatedMovies = topRatedMovies,
        // error =>  this.errorMessage = <any>error
    );

    this.movieInfoService.getCurrentMovies()
      .subscribe(
        currentMovies => this.currentMovies = currentMovies,
        // error =>  this.errorMessage = <any>error
    );

    this.movieInfoService.getScifiMovies()
      .subscribe(
        scifiMovies => this.scifiMovies = scifiMovies,
        // error =>  this.errorMessage = <any>error
    );

   }

  ngOnInit() {
  }

}
