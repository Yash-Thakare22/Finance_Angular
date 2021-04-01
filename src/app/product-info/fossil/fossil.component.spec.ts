import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilComponent } from './fossil.component';

describe('FossilComponent', () => {
  let component: FossilComponent;
  let fixture: ComponentFixture<FossilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FossilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FossilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
