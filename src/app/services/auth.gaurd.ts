import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from 'app/services/user.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService) { }

    canActivate() {
        return this.userService.getUser().toPromise().then(resp => {
            return !!resp.email;
        })
    }
}