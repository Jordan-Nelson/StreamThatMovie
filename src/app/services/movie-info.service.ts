import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MovieList } from 'app/models/movieList';
import { ConstantsService } from "app/services/constants.service";

@Injectable()
export class MovieInfoService {
  options: RequestOptions;

  constructor(private http: Http, private constants: ConstantsService) { 
    this.options = new RequestOptions();
    this.options.withCredentials = true;
  }

  getMovies(query): Observable<MovieList> {
    return this.http.get(this.constants.API_ENDPOINT + 'api/tmdb/search/' + query, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCategory(category): Observable<MovieList> {
    return this.http.get(this.constants.API_ENDPOINT + 'api/tmdb/category/' + category, this.options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  getSimilarMovies(id): Observable<MovieList> {
    return this.http.get(this.constants.API_ENDPOINT + 'api/tmdb/similar/' + id, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNetflixMovies(page = 1): Observable<MovieList> {
    return this.http.get(this.constants.API_ENDPOINT + 'api/category/netflix?page=' + page, this.options)
      .map(this.extractData)
      .catch(this.handleError);
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
