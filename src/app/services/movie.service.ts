import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
import { Genre } from '../models/Genre';

import { HttpHeaders } from '@angular/common/http';
import { MoviesRequest } from '../models/moviesRequest';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  MOVIE_URL: string;
  API_KEY: string;
  LANG_ES: string;

  constructor(
    private http: HttpClient
  ) {
    this.MOVIE_URL = 'https://api.themoviedb.org/3';
    this.API_KEY = '?api_key=47e9343266e8744b00c528004039ea3b';
    this.LANG_ES = '&language=es-ES';

  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.MOVIE_URL + '/movie/' + id + this.API_KEY + this.LANG_ES);
  }

  getMovieByTitle(title: string): Observable<Movie> {
    return this.http.get<Movie>(this.MOVIE_URL + '/search/movie' + this.API_KEY + this.LANG_ES + '&query=' + title);
  }

  getMoviesByTitle(title: string): Observable<MoviesRequest> {
    return this.http.get<MoviesRequest>(this.MOVIE_URL + '/search/movie' + this.API_KEY + this.LANG_ES + '&query=' + title);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.MOVIE_URL + '/genre/movie/list' + this.API_KEY + this.LANG_ES);
  }
}
