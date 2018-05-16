import {Component} from '@angular/core';
import {CellControl} from './table-forms/cell/cell';
import {RowControl} from './table-forms/row/row';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public config = {
    rows: [new RowControl({
      'test'     : new CellControl(''),
      'test_two' : new CellControl(''),
      'test_tree': new CellControl('')
    }), new RowControl({
      'test'     : new CellControl(''),
      'test_two' : new CellControl(''),
      'test_tree': new CellControl('')
    }), new RowControl({
      'test'      : new CellControl(''),
      'test_two'  : new CellControl(''),
      'test_three': new CellControl('')
    })]
  };

}
