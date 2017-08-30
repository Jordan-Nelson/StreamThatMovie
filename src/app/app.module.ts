import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from "@angular/http";

import { MyHammerConfig } from './app.config';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchComponent } from './components/search/search.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ResultFilterPipe } from 'app/pipes/result-filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { MovieService } from './services/movie.service';
import { MovieInfoService } from './services/movie-info.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AuthGuard } from "app/guards/auth.guard";
import { MovieSearchResolve } from "app/resolvers/movie-search.resolve";
import { MovieCategoryResolve } from "app/resolvers/movie-categories.resolve";
import { ConstantsService } from './services/constants.service';
import { ArraySortPipe } from './pipes/array-sort.pipe';
import { MovieListPreviewComponent } from './components/movie-list-preview/movie-list-preview.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SearchBarComponent,
    SearchComponent,
    MovieCardComponent,
    ResultFilterPipe,
    LoginComponent,
    SummaryPipe,
    MovieListComponent,
    FavoritesComponent,
    ArraySortPipe,
    MovieListPreviewComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [
    UserService, 
    MovieService, 
    MovieInfoService, 
    AuthGuard, 
    MovieSearchResolve,
    MovieCategoryResolve,
    ConstantsService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
