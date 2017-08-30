import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListPreviewComponent } from './movie-list-preview.component';

describe('MovieListPreviewComponent', () => {
  let component: MovieListPreviewComponent;
  let fixture: ComponentFixture<MovieListPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
