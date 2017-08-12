import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Movie } from 'app/shared/movie';

@Injectable()
export class MovieInfoService {
  private currentYear = (new Date()).getFullYear();
  private baseUrl = 'https://api.themoviedb.org/3/';
  private key = '4b0d7d7a3b07fc8a84025f3e1edd7a0e';
  private jsonp = '&callback=test'
  private searchUrl = this.baseUrl + 'search/movie?api_key=' + this.key + '&query=';
  private similarUrl = this.baseUrl + 'movie/" + id + "/similar?api_key=' + this.key;
  private popularMoviesUrl = this.baseUrl + 'discover/movie?api_key=' + this.key + '&sort_by=popularity.desc&vote_count.gte=100'
  private gRatedMoviesUrl = this.baseUrl + 'discover/movie?api_key=' + this.key +
      '&certification_country=US&certification.lte=G&sort_by=popularity.desc&vote_count.gte=100';
  private comedyMoviesURL = this.baseUrl + 'discover/movie?api_key=' + this.key +
      '&with_genres=35&sort_by=popularity.desc&vote_count.gte=100';
  private topRatedMoviesURL = this.baseUrl + 'discover/movie?api_key=' + this.key +
      '&sort_by=vote_average.desc&vote_count.gte=1000';
  private topCurrentMoviesURL = this.baseUrl + 'discover/movie?api_key=' + this.key +
      '&sort_by=vote_average.desc&vote_count.gte=100&primary_release_year=' + this.currentYear;
  private topScifiMoviesURL = this.baseUrl + 'discover/movie?api_key=' + this.key +
      '&with_genres=878&sort_by=vote_average.desc&vote_count.gte=1000';
  // private similarMoviesURL = this.baseUrl + 'movie/'

  constructor(private http: Http) { }

  getMovies(query): Observable<Movie[]> {
    return this.http.get(this.searchUrl + query)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getCategory(category): Observable<Movie[]> {
    switch (category) {
        case 'popular': return this.getPopularMovies();
        case 'g-rated': return this.getGRatedMovies();
        case 'comedy': return this.getComedyMovies();
        case 'top-rated': return this.getTopRated();
        case 'current': return this.getCurrentMovies();
        case 'sci-fi': return this.getScifiMovies();
        default: return null;
    }
  }

  getSimilarMovies(id): Observable<Movie[]> {
    return this.http.get(this.baseUrl + 'movie/' + id + '/similar?api_key=' + this.key)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get(this.popularMoviesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getGRatedMovies(): Observable<Movie[]> {
    return this.http.get(this.gRatedMoviesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getComedyMovies(): Observable<Movie[]> {
    return this.http.get(this.comedyMoviesURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getTopRated(): Observable<Movie[]> {
    return this.http.get(this.topRatedMoviesURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getCurrentMovies(): Observable<Movie[]> {
    return this.http.get(this.topCurrentMoviesURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getScifiMovies(): Observable<Movie[]> {
    return this.http.get(this.topScifiMoviesURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log(body)
    return body || { };
  }

  private handleError (error: Response | any) {
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