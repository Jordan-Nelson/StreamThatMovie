import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from 'app/models/user';

@Injectable()
export class UserService {
  currentUser: User;
  serverURL: String = 'http://localhost:3000/';

  constructor(private http: Http, private router: Router) { }

  signup(user): Observable<User> {
    const data = { email: user.email, password: user.password, password_confirm: user.password_confirm }
    return this.http.post(this.serverURL + 'api/auth/signup', data)
      .do(response => this.currentUser = response.json().user)
      .map(this.extractData)
  }

  login(user): Observable<User> {
    let options = new RequestOptions();
    options.withCredentials = true;
    const data = { email: user.email, password: user.password }
    return this.http.post(this.serverURL + 'api/auth/login', data, options)
      .do(response => this.currentUser = response.json().user)
      .map(this.extractData)
  }

  logout(): Observable<Response> {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(this.serverURL + 'api/auth/logout', options)
      .do(response => {
        this.currentUser = null;
        this.router.navigateByUrl('/')
      })
      .catch(this.handleError)
  }

  delete(): Observable<Response> {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(this.serverURL + 'api/auth/delete', options)
      .do(response => {
        this.currentUser = null;
        this.router.navigateByUrl('/')
      })
      .catch(this.handleError)
  }

  getUser(): Observable<User> {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(this.serverURL + 'api/getUser', options)
      .do(response => this.currentUser = response.json())
      .map(this.extractData)
      .catch(err => {
        return Observable.of({ message: 'User is not autheticated' })
      })
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
