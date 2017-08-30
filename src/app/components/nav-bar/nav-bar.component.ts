import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";
import { MdDialog } from "@angular/material";
import { ConfirmDialogComponent } from "app/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'stream-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUser: {};
  UserService: UserService

  constructor(UserService: UserService, private mdDialog: MdDialog) { 
    this.UserService = UserService;
  }

  ngOnInit() {
    this.UserService.getUser().subscribe();
  }

  logout() {
    let that = this;
    this.mdDialog.open(ConfirmDialogComponent, {
      disableClose: true,
      data: {
        title: 'Logout',
        content: 'Are you sure you would like to logout?',
        confirm: {
          text: 'Yeah',
          click: function () {
            that.UserService.logout().subscribe();
          }
        },
        cancel: {
          text: 'Not now',
          click: function () {
          }
        }
      }
    });
  }

  delete() {
    let that = this;
    this.mdDialog.open(ConfirmDialogComponent, {
      disableClose: true,
      data: {
        title: 'Delete Account',
        content: 'Are you sure you would like to delete your account? This cannot be undone!',
        confirm: {
          text: 'Delete Account',
          click: function () {
            that.UserService.delete().subscribe();
          }
        },
        cancel: {
          text: 'Nope',
          click: function () {
          }
        }
      }
    });
  }

}
