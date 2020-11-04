import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanComponent } from './than.component';

describe('ThanComponent', () => {
  let component: ThanComponent;
  let fixture: ComponentFixture<ThanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
