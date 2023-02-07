import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbrechtComponent } from './albrecht.component';

describe('AlbrechtComponent', () => {
  let component: AlbrechtComponent;
  let fixture: ComponentFixture<AlbrechtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbrechtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbrechtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
