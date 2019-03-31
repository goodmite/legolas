import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvNodeComponent } from './csv-node.component';

describe('CsvNodeComponent', () => {
  let component: CsvNodeComponent;
  let fixture: ComponentFixture<CsvNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
