import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stream-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() result: string;
  @Input() email: string;

  constructor() { }

  ngOnInit() {
  }

}
