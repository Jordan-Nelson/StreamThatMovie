import { Component, OnInit } from '@angular/core';

import { Movie } from 'app/models/movie';
import { MovieInfoService } from 'app/services/movie-info.service';


@Component({
  selector: 'stream-search',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

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
        popularMovies => this.popularMovies = popularMovies
      );

    this.movieInfoService.getGRatedMovies()
      .subscribe(
        gRatedMovies => this.gRatedMovies = gRatedMovies
    );

    this.movieInfoService.getComedyMovies()
      .subscribe(
        comedyMovies => this.comedyMovies = comedyMovies
    );

    this.movieInfoService.getTopRated()
      .subscribe(
        topRatedMovies => this.topRatedMovies = topRatedMovies
    );

    this.movieInfoService.getCurrentMovies()
      .subscribe(
        currentMovies => this.currentMovies = currentMovies
    );

    this.movieInfoService.getScifiMovies()
      .subscribe(
        scifiMovies => this.scifiMovies = scifiMovies
    );

   }

  ngOnInit() {
  }

}
