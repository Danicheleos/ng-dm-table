import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDmTableComponent } from './table.component';

describe('TableComponent', () => {
  let component: NgDmTableComponent;
  let fixture: ComponentFixture<NgDmTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDmTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
