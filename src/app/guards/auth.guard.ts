import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate() {
        return this.userService.getUser().toPromise().then(resp => {
            if(!!resp.email) {
                return true;
            } else {
                this.router.navigate(['/home']);
            }
            
        })
    }
}