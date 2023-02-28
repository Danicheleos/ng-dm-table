import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList } from '@angular/core';

@Component({
  selector: 'ng-dm-table-header',
  templateUrl: './ng-dm-table-header.component.html',
  styleUrls: ['./ng-dm-table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDmTableHeaderComponent {
  @ContentChildren(NgDmTableHeaderComponent) public readonly tableHeader: QueryList<NgDmTableHeaderComponent>;
  @Input() public name: string;
  @Input() public title: string;
}
