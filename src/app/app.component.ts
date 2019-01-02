import { Component, OnInit } from '@angular/core';
import { MovieService } from '../app/services/movie.service';
import { Movie } from '../app/models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public movieTitle: string;

  movie: Movie;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getMovieById(2).subscribe((data => {
      this.movie = data;
    }));
  }

}
