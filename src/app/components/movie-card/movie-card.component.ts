import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MovieService } from "app/services/movie.service";

@Component({
  selector: 'stream-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() result: any;
  @Input() email: string;

  constructor(private MovieService: MovieService) { }

  ngOnInit() {
    this.getUserRating();
    this.getFavorite();
    this.getAvgRating();
  }

  rateMovie(rating: number) {
    this.MovieService.rateMovie(this.result.id, rating).subscribe((resp: any) => {
      this.result.userRating = resp.rating;
      this.getAvgRating();
    })
  }

  getUserRating() {
    this.MovieService.getRating(this.result.id).subscribe((resp: any) => {
      this.result.userRating = resp.rating;
    })
  }

  getAvgRating() {
    this.MovieService.getAvgRating(this.result.id).subscribe((resp: any) => {
      this.result.avgRating = resp.rating;
    })
  }

  favoriteMovie() {
    this.MovieService.favoriteMovie(this.result.id).subscribe(resp => {
      resp.status === 201 ? this.result.favorite = true : null;
    })
  }

  getFavorite() {
    this.MovieService.getFavorite(this.result.id).subscribe(resp => {
      resp.status === 200 ? this.result.favorite = true : null;
      resp.status === 404 ? this.result.favorite = false : null;
    })
  }

  deleteFavorite() {
    this.MovieService.deleteFavorite(this.result.id).subscribe(resp => {
      resp.status === 200 ? this.result.favorite = false : null;
    })
  }

}
