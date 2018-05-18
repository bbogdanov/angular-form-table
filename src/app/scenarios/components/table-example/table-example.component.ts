import {Component, ViewChild} from '@angular/core';
import {CellControl} from '../../../table-forms/cell/cellControl';
import {cellValueExist} from '../../../table-forms/cell/validators/cellValueExist.validator';
import {RowControl} from '../../../table-forms/row/rowControl';
import {TableComponent} from '../../../table-forms/table/table.component';
import {TableControl} from '../../../table-forms/table/tableControl';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent {

  @ViewChild(TableComponent) table: TableComponent;

  public rowIndex: number = 0;

  public config = {
    rows: [
      this.createRow(),
      this.createRow(),
      this.createRow(),
      this.createRow(),
      this.createRow(),
      this.createRow(),
      this.createRow(),
      this.createRow(),
      this.createRow(),
      this.createRow(),
      this.createRow()
    ]
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

  public addNewRow() {
    this.table.table.push(this.createRow());
  }

  public deleteRow(index?: number) {
    this.table.table.pop(index);
  }

  public moveRowToAnother(table: TableControl, rowIndex: number) {
    this.table.table.moveRowToAnother(table, rowIndex);
  }

  private createRow() {
    return new RowControl({
      'test'      : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test2'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test3'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test4'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
      'test5'     : new CellControl('', cellValueExist({ valueExist: 'Value already exist.'})),
    });
  }


}
