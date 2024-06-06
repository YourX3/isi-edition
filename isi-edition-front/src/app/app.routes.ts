import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AuthorViewComponent } from './views/author-view/author-view.component';
import { BookViewComponent } from './views/book-view/book-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'authors', component: AuthorViewComponent },
  { path: 'books', component: BookViewComponent }
];
