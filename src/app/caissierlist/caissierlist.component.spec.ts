import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaissierlistComponent } from './caissierlist.component';

describe('CaissierlistComponent', () => {
  let component: CaissierlistComponent;
  let fixture: ComponentFixture<CaissierlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaissierlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaissierlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
