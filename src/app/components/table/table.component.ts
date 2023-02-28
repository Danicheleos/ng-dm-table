import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { NgDmTableHeaderComponent } from '../ng-dm-table-header/ng-dm-table-header.component';

@Component({
  selector: 'ng-dm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDmTableComponent implements AfterViewInit {
  @ContentChildren(NgDmTableHeaderComponent) public readonly tableHeader: QueryList<NgDmTableHeaderComponent>;
  @Input() data: any[] = [];

  public columnNames: string[] = [];

  constructor(private cdRef: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.initColumns();
    this.cdRef.detectChanges();
  }

  private initColumns(): void {
    this.columnNames = [];

    const readHeaders = (headers: QueryList<NgDmTableHeaderComponent>) => {
      headers.forEach(header => {
        if (header.tableHeader.length) {
          readHeaders(header.tableHeader);
          return;
        }
        this.columnNames.push(header.name);
      })
    }

    readHeaders(this.tableHeader);
  }
}
