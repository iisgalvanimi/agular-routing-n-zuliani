import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopartistsComponent } from './topartists.component';

describe('TopartistsComponent', () => {
  let component: TopartistsComponent;
  let fixture: ComponentFixture<TopartistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopartistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopartistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
