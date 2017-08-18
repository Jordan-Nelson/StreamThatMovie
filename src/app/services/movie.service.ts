import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { LoginComponent } from "app/components/login/login.component";


@Injectable()
export class MovieService {

  serverURL: String = 'http://localhost:3000/';  

  constructor(private http: Http, private mdDialog: MdDialog) { }

  rateMovie(id: number, rating: number): Observable<Response> {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(this.serverURL + `api/movie/rating/${id}`, {rating}, options)
      .map(res => res.json().rating)
      .catch(res => {
        if (res.status === 403) {
          this.mdDialog.open(LoginComponent, {hasBackdrop: true, disableClose: false})
        }
        return Observable.of(res);
      })
  }

  getMovieRating(id: number): Observable<Response> {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(this.serverURL + `api/movie/rating/${id}`, options)
      .map(res => res.json().rating)
  }

  favoriteMovie(id: number) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(this.serverURL + `api/movie/favorite/${id}`, {}, options)
  }

  getFavorite(id?: number) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(this.serverURL + `api/movie/favorite/${id}`, options)
  }

  deleteFavorite(id: number) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.delete(this.serverURL + `api/movie/favorite/${id}`, options)
  }

}
