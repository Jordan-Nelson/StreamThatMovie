import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { SearchComponent } from 'app/search/search/search.component';
import { LoginComponent } from 'app/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/login',
    component: LoginComponent
  },
  {
    path: 'home/search/:query',
    component: SearchComponent
  },
  {
    path: 'home/category/:category',
    component: SearchComponent
  },
  {
    path: 'home/similar/:similarID',
    component: SearchComponent
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
