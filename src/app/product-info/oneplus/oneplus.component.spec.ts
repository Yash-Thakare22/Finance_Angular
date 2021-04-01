import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneplusComponent } from './oneplus.component';

describe('OneplusComponent', () => {
  let component: OneplusComponent;
  let fixture: ComponentFixture<OneplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
