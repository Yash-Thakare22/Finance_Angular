import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsComponent } from './beats.component';

describe('BeatsComponent', () => {
  let component: BeatsComponent;
  let fixture: ComponentFixture<BeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
