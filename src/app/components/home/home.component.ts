import { Component, OnInit } from '@angular/core';

// import { MovieList } from 'app/models/movieList';
// import { MovieInfoService } from 'app/services/movie-info.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'stream-search',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  movieCategories: any;

  constructor(private route: ActivatedRoute) {

    this.movieCategories = this.route.snapshot.data['movieCategories'];

   }

  ngOnInit() {
  }

}
