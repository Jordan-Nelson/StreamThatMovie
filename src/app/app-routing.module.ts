import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/components/home/home.component';
import { SearchComponent } from 'app/components/search/search.component';
import { LoginComponent } from 'app/components/login/login.component';
import { FavoritesComponent } from "app/components/favorites/favorites.component";
import { UserService } from "app/services/user.service";
import { AuthGuard } from "app/guards/auth.guard";
import { MovieSearchResolve } from "app/resolvers/movie-search.resolve"
import { MovieCategoryResolve } from "app/resolvers/movie-categories.resolve";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      movieCategories: MovieCategoryResolve
    }
  },
  {
    path: 'home/login',
    component: LoginComponent
  },
  {
    path: 'home/favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home/search/:query',
    component: SearchComponent,
    resolve: {
      movieData: MovieSearchResolve
    }
  },
  {
    path: 'home/category/:category',
    component: SearchComponent,
    resolve: {
      movieData: MovieSearchResolve
    }
  },
  {
    path: 'home/similar/:similarID',
    component: SearchComponent,
    resolve: {
      movieData: MovieSearchResolve
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
