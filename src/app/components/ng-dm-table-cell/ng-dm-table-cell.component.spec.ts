import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDmTableCellComponent } from './ng-dm-table-cell.component';

describe('NgDmTableCellComponent', () => {
  let component: NgDmTableCellComponent;
  let fixture: ComponentFixture<NgDmTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDmTableCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDmTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
