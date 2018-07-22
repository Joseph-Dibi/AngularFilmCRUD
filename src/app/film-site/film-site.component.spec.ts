import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSiteComponent } from './film-site.component';

describe('FilmSiteComponent', () => {
  let component: FilmSiteComponent;
  let fixture: ComponentFixture<FilmSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
