import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ng-dm-table-cell',
  templateUrl: './ng-dm-table-cell.component.html',
  styleUrls: ['./ng-dm-table-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDmTableCellComponent implements AfterViewInit {
  @Input() public uniqId: string;
  public width: string;

  @HostListener('window:resize', ['$event'])
  private onResize(): void {
    const el = document.getElementById(this.uniqId);
    const width = el?.getBoundingClientRect().width + 'px';
    this.renderer.setStyle(this.elRef.nativeElement, 'width', width);
  }

  constructor(public renderer: Renderer2, public elRef: ElementRef) {}

  public ngAfterViewInit(): void {
    this.onResize();
  }
}
