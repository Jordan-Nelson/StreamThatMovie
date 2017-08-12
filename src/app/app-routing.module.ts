import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { SearchComponent } from 'app/search/search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search/:query',
    component: SearchComponent
  },
  {
    path: 'category/:category',
    component: SearchComponent
  },
  {
    path: 'similar/:similarID',
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
