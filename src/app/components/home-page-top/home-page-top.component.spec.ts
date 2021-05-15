import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTopComponent } from './home-page-top.component';

describe('HomePageTopComponent', () => {
  let component: HomePageTopComponent;
  let fixture: ComponentFixture<HomePageTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
