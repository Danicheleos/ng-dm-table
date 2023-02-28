import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDmTableHeaderComponent } from './ng-dm-table-header.component';

describe('NgDmTableHeaderComponent', () => {
  let component: NgDmTableHeaderComponent;
  let fixture: ComponentFixture<NgDmTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDmTableHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDmTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
