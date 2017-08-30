import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stream-movie-list-preview',
  templateUrl: './movie-list-preview.component.html',
  styleUrls: ['./movie-list-preview.component.scss']
})
export class MovieListPreviewComponent implements OnInit {
  @Input() movies: any;
  @Input() title: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
