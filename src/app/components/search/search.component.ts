import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MovieInfoService } from 'app/services/movie-info.service';

@Component({
  selector: 'stream-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movieData: any;
  results: any;
  params: any;
  responseData: Object;

  constructor(private route: ActivatedRoute, private movieInfoService: MovieInfoService) {

    this.route.params.subscribe( params => {
      this.movieData = this.route.snapshot.data['movieData'];
     });
  }

  ngOnInit() {
  }

}
