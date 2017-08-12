import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'stream-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search: (query: any) => void;
  query: String;

  constructor(private router: Router) {
    this.search = function(query) {
      console.log(query)
      this.router.navigateByUrl('search/' + query);

    }
  }

  ngOnInit() {
  }

}
