import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpModule } from "@angular/http";

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],      
      providers: [MovieService]
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
