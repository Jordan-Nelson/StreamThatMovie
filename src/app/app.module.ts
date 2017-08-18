import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { HttpModule } from "@angular/http";

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
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [UserService, MovieService, MovieInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
