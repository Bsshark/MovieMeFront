import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  MOVIE_URL: string;
  API_KEY: string;

  constructor(
    private http: HttpClient
  ) {
    this.MOVIE_URL = 'https://api.themoviedb.org/3';
    this.API_KEY = '47e9343266e8744b00c528004039ea3b';

  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.MOVIE_URL + '/movie/' + id + '?api_key=' + this.API_KEY);
  }

  getMovieByTitle(title: string): Observable<Movie> {
    return this.http.get<Movie>(this.MOVIE_URL + '/search/movie' + '?api_key=' + this.API_KEY + '&query=' + title);
  }

  getMoviesByTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.MOVIE_URL + '/search/multi' + '?api_key=' + this.API_KEY + '&query=' + title);
  }
}
