import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockusersystemComponent } from './blockusersystem.component';

describe('BlockusersystemComponent', () => {
  let component: BlockusersystemComponent;
  let fixture: ComponentFixture<BlockusersystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockusersystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockusersystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
