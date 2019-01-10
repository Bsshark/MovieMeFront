import { Component, OnInit } from '@angular/core';
import { MovieService } from '../app/services/movie.service';
import { Movie } from '../app/models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movie: Movie = new Movie();
  movies: Movie[] = [];

  moviePanel = false;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getMovieById(2).subscribe((data => {
      //this.movie = data;
    }));
  }

  onSearchChange(searchValue: string) {
    this.movieService.getMoviesByTitle(searchValue).subscribe((data => {
      this.movies = data.results;
      console.log(this.movies.length);
      if (this.movies.length > 0) {
        this.moviePanel = true;
      } else {
        this.moviePanel = false;
      }
    }));
  }

}
