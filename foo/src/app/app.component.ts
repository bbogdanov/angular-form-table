import {Component} from '@angular/core';
import {CellControl} from './table-forms/cell/cell';
import {RowControl} from './table-forms/row/row';

const cells = [
  new CellControl(''),
  new CellControl(2),
  new CellControl(true)
];

const row = new RowControl(cells);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public config = {
    rows: [row, row]
  }

}
