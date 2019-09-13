import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompteComponent } from './allcompte.component';

describe('AllcompteComponent', () => {
  let component: AllcompteComponent;
  let fixture: ComponentFixture<AllcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
