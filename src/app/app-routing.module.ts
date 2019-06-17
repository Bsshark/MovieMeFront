import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MovieSearchComponent} from './pages/movie-search/movie-search.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/search', pathMatch: 'full',
  }, {
    path: 'search', component: MovieSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
