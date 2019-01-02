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
    this.MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
    this.API_KEY = '47e9343266e8744b00c528004039ea3b';

  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.MOVIE_URL + id + '?api_key=' + this.API_KEY);
  }
}
