import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RggisterComponent } from './rggister.component';

describe('RggisterComponent', () => {
  let component: RggisterComponent;
  let fixture: ComponentFixture<RggisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RggisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RggisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
