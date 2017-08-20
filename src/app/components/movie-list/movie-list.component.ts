import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stream-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: any;
  @Input() noResultMessage: String;

  constructor() { }

  ngOnInit() {
  }

}
