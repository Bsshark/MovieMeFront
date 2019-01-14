import { Movie } from '../models/movie';

export class MoviesRequest {
    pages: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}