import { Component, OnInit } from '@angular/core';
import { MovieService } from '../app/services/movie.service';
import { Movie } from '../app/models/Movie';
import { Genre } from '../app/models/Genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movie: Movie = new Movie();
  movies: Movie[] = [];
  genres: Genre[] = [];

  moviePanel = false;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
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
