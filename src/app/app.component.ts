import { Component } from '@angular/core';
import { MockData } from './core/constants/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-dm-table';

  public data = MockData;
}
