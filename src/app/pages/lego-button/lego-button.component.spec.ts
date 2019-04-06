import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoButtonComponent } from './lego-button.component';

describe('LegoButtonComponent', () => {
  let component: LegoButtonComponent;
  let fixture: ComponentFixture<LegoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
