import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDmTableComponent } from './table/table.component';
import { NgDmTableHeaderComponent } from './ng-dm-table-header/ng-dm-table-header.component';



@NgModule({
  declarations: [
    NgDmTableComponent,
    NgDmTableHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgDmTableHeaderComponent,
    NgDmTableComponent
  ]
})
export class NgDmTableModule { }
