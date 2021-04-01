import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterPayComponent } from './after-pay.component';

describe('AfterPayComponent', () => {
  let component: AfterPayComponent;
  let fixture: ComponentFixture<AfterPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
