import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";

@Component({
  selector: 'stream-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUser: {};
  UserService: UserService;

  constructor(UserService: UserService) {
    this.UserService = UserService;
  }

  ngOnInit() {
    this.UserService.getUser().subscribe();
  }

  logout() {
    this.UserService.logout().subscribe();
  }

  delete() {
    this.UserService.delete().subscribe();
  }

}
