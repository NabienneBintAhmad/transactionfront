import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepothistoriqueComponent } from './depothistorique.component';

describe('DepothistoriqueComponent', () => {
  let component: DepothistoriqueComponent;
  let fixture: ComponentFixture<DepothistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepothistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepothistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
