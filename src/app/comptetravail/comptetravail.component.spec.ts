import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptetravailComponent } from './comptetravail.component';

describe('ComptetravailComponent', () => {
  let component: ComptetravailComponent;
  let fixture: ComponentFixture<ComptetravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptetravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptetravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
