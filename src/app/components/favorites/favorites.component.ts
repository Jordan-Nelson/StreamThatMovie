import { Component, OnInit } from '@angular/core';
import { CanActivate } from "@angular/router";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'stream-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: any;

  constructor(private userService: UserService) { 
    this.favoriteMovies = null;
  }

  ngOnInit() {
    this.getFavoriteList();
  }

  getFavoriteList() {
    this.userService.getFavoriteList().subscribe(resp => {
      this.favoriteMovies = resp;
    })
  }

}
