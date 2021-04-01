import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone11Component } from './iphone11.component';

describe('Iphone11Component', () => {
  let component: Iphone11Component;
  let fixture: ComponentFixture<Iphone11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iphone11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iphone11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
