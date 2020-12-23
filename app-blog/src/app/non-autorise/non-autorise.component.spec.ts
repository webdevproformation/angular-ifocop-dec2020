import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAutoriseComponent } from './non-autorise.component';

describe('NonAutoriseComponent', () => {
  let component: NonAutoriseComponent;
  let fixture: ComponentFixture<NonAutoriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonAutoriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAutoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
