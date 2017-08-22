import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from 'app/models/user';
import { ConstantsService } from "app/services/constants.service";

@Injectable()
export class UserService {
  currentUser: User;
  options: RequestOptions;
  
  constructor(private http: Http, private router: Router, private constants: ConstantsService) { 
    this.options = new RequestOptions();
    this.options.withCredentials = true;
  }

  signup(user): Observable<User> {
    const data = { email: user.email, password: user.password, password_confirm: user.password_confirm }
    return this.http.post(this.constants.API_ENDPOINT + 'api/auth/signup', data, this.options)
      .do(response => this.currentUser = response.json().user)
      .map(this.extractData)
  }

  login(user): Observable<User> {
    const data = { email: user.email, password: user.password }
    return this.http.post(this.constants.API_ENDPOINT + 'api/auth/login', data, this.options)
      .do(response => this.currentUser = response.json().user)
      .map(this.extractData)
  }

  logout(): Observable<Response> {
    return this.http.get(this.constants.API_ENDPOINT + 'api/auth/logout', this.options)
      .do(response => {
        this.currentUser = null;
        this.router.navigateByUrl('/')
      })
      .catch(this.handleError)
  }

  delete(): Observable<Response> {
    return this.http.get(this.constants.API_ENDPOINT + 'api/auth/delete', this.options)
      .do(response => {
        this.currentUser = null;
        this.router.navigateByUrl('/')
      })
      .catch(this.handleError)
  }

  getUser(): Observable<User> {
    return this.http.get(this.constants.API_ENDPOINT + 'api/getUser', this.options)
      .do(response => this.currentUser = response.json())
      .map(this.extractData)
      .catch(err => {
        return Observable.of({ message: 'User is not autheticated' })
      })
  }

  getFavoriteList(): Observable<Response> {
    return this.http.get(this.constants.API_ENDPOINT + 'api/user/favoriteList', this.options)
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
