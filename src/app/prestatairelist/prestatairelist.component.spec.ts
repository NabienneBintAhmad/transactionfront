import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatairelistComponent } from './prestatairelist.component';

describe('PrestatairelistComponent', () => {
  let component: PrestatairelistComponent;
  let fixture: ComponentFixture<PrestatairelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestatairelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestatairelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
