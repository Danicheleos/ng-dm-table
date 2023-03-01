import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { HeaderData } from 'src/app/core/interfaces/header-data.interface';
import { NgDmTableCellComponent } from '../ng-dm-table-cell/ng-dm-table-cell.component';
import { NgDmTableHeaderComponent } from '../ng-dm-table-header/ng-dm-table-header.component';

@Component({
  selector: 'ng-dm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDmTableComponent implements AfterViewInit {
  @ContentChildren(NgDmTableHeaderComponent) public readonly tableHeader: QueryList<NgDmTableHeaderComponent>;
  @ViewChildren(NgDmTableCellComponent) public readonly cells: NgDmTableCellComponent;
  @Input() data: any[] = [];

  public columnNames: HeaderData[] = [];

  constructor(private cdRef: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {}

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
        const { name, uniqId } = header;
        this.columnNames.push({ name, uniqId });
      })
    }

    readHeaders(this.tableHeader);
  }
}
