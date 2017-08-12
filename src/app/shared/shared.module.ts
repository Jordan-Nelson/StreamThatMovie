import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MovieInfoService } from './movie-info.service';
// import { ResultFilterPipe } from './result-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [MovieInfoService, HttpModule]
})
export class SharedModule { }
