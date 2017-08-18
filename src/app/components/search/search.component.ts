import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MovieInfoService } from 'app/services/movie-info.service';
import { Movie } from 'app/shared/movie';

@Component({
  selector: 'stream-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results: any;
  params: any;
  responseData: Object;

  constructor(private route: ActivatedRoute, private movieInfoService: MovieInfoService) {

    this.route.params.subscribe( params => {
      this.params = params;
      if (this.params.query) {
        this.movieInfoService.getMovies(this.params.query)
          .subscribe(
            responseData => this.responseData = responseData
        );
      } else if (this.params.category) {
        this.movieInfoService.getCategory(this.params.category)
          .subscribe(
            responseData => this.responseData = responseData
        );
      } else if (this.params.similarID) {
        this.movieInfoService.getSimilarMovies(this.params.similarID)
          .subscribe(
            responseData => this.responseData = responseData
        );
      }

     });
  }

  ngOnInit() {
  }

}
