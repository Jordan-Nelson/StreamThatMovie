import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './search/search/search.component';
import { MovieCardComponent } from './movie-card/movie-card/movie-card.component';
import { ResultFilterPipe } from 'app/pipes/result-filter.pipe';
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SearchBarComponent,
    SearchComponent,
    MovieCardComponent,
    ResultFilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
