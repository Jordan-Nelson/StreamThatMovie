import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ConstantsService } from "app/services/constants.service";
import { ConfirmDialogComponent } from "app/components/confirm-dialog/confirm-dialog.component";
import { Router } from "@angular/router";


@Injectable()
export class MovieService {
  options: RequestOptions;

  constructor(private http: Http, private mdDialog: MdDialog, private constants: ConstantsService, private router: Router) { 
    this.options = new RequestOptions();
    this.options.withCredentials = true;
  }

  getRating(id: number): Observable<Response> {
    return this.http.get(this.constants.API_ENDPOINT + `api/movie/rating/${id}`, this.options)
      .map(res => res.json())
  }

  getAvgRating(id: number): Observable<Response> {
    return this.http.get(this.constants.API_ENDPOINT + `api/movie/rating/avg/${id}`, this.options)
      .map(res => res.json())
  }

  rateMovie(id: number, rating: number): Observable<Response> {
    return this.http.post(this.constants.API_ENDPOINT + `api/movie/rating/${id}`, {rating}, this.options)
      .map(res => res.json())
      .catch(res => this.authCatch(res))
  }

  getFavorite(id?: number) {
    return this.http.get(this.constants.API_ENDPOINT + `api/movie/favorite/${id}`, this.options)
  }

  favoriteMovie(movie: any) {
    return this.http.post(this.constants.API_ENDPOINT + `api/movie/favorite/`, movie, this.options)
      .catch(res => this.authCatch(res))
  }

  deleteFavorite(id: number) {
    return this.http.delete(this.constants.API_ENDPOINT + `api/movie/favorite/${id}`, this.options)
      .catch(res => this.authCatch(res))
  }

  getSource(id?: number) {
    return this.http.get(this.constants.API_ENDPOINT + `api/movie/source/${id}`, this.options)
    .map(res => res.json())
  }

  authCatch(res: Response): Observable<Response> {
    if (res.status === 403 || res.status === 401) {
        let that = this;
        this.mdDialog.open(ConfirmDialogComponent, {
          disableClose: true,
          data: {
            title: 'Please Login',
            content: 'You must be logged in to do that. Would you like to login or sign up now?',
            confirm: {
              text: 'Yeah',
              click: function () {
                that.router.navigateByUrl('/home/login');
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
    return Observable.of(res);
  }

}
