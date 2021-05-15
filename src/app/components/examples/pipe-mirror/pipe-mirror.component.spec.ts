import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMirrorComponent } from './pipe-mirror.component';

describe('PipeMirrorComponent', () => {
  let component: PipeMirrorComponent;
  let fixture: ComponentFixture<PipeMirrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeMirrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
