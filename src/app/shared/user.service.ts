import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from 'app/shared/user';

@Injectable()
export class UserService {
  currentUser: User;
  serverURL: String = 'http://localhost:3000/';

  constructor(private http: Http) { }

  signup(user): Observable<User> {
    const data = { email: user.email, password: user.password, password_confirm: user.password_confirm }
    return this.http.post(this.serverURL + 'api/signup', data)
      .do(response => this.currentUser = response.json().user )
      .map(response => response.json())
  }

  login(user): Observable<User> {
    const data = { email: user.email, password: user.password }
    return this.http.post(this.serverURL + 'api/login', data)
      .do(response => this.currentUser = response.json().user )
      .map(response => response.json())
  }

  // getUser(): Observable<{}> {
  //   return Observable.of(this.currentUser)
  // }

  getUser(): Observable<User> {
    return this.http.get(this.serverURL + 'api/getUser')
      // .do(response => this.currentUser = response.json().user )
      .map(response => response.json())
  }  

}
