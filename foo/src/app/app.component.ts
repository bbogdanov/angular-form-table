import {Component, ViewChild} from '@angular/core';
import {CellControl} from './table-forms/cell/cell';
import {cellValueExist} from './table-forms/cell/validators/cellValueExist.validator';
import {RowControl} from './table-forms/row/row';
import {TableControl} from './table-forms/table/table';
import {TableComponent} from './table-forms/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(TableComponent) table: TableComponent;

  public config = {
    rows: [new RowControl({
      'test'      : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test2'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test3'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test4'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test5'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
    }), new RowControl({
      'test'      : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test2'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test3'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test4'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test5'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
    }), new RowControl({
      'test'      : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test2'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test3'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test4'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test5'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
    }), new RowControl({
      'test'      : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test2'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test3'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test4'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test5'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
    }), new RowControl({
      'test'      : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test2'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test3'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test4'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test5'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
    }), new RowControl({
      'test'      : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test2'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test3'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test4'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test5'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
    }), new RowControl({
      'test'      : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test2'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test3'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test4'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test5'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
    })]
  };

  public log() {
    this.logger(this.table.table);
  }

  private logger(control: TableControl | RowControl) {
    if (!control) return;

    console.log(control);

    if (control.controls) {
      for (let index in control.controls) {
        this.logger(control.controls[index]);
      }
    }
  }

}
