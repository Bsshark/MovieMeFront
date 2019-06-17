import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/Movie';
import {Genre} from '../../models/Genre';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movie: Movie;
  movies: Movie[] = [];
  genres: Genre[] = [];

  moviePanel = false;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movie = new Movie();
    console.log(this.movie);
    this.movieService.getGenres().subscribe((data => {
      this.genres = data['genres'];
    }));
  }

  onSearchChange(searchValue: string) {
    this.movieService.getMoviesByTitle(searchValue).subscribe((data => {
      this.movies = data.results;
      this.movies.forEach(movie => {
        movie.genres = [];
        movie.genre_ids.forEach(genre_id => {
          for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].id === genre_id) {
              movie.genres.push(this.genres[i].name);
            }
          }
        });
      });

      if (this.movies.length > 0) {
        this.moviePanel = true;
      } else {
        this.moviePanel = false;
      }
    }));
  }
}
