import {Component, QueryList, ViewChildren} from '@angular/core';
import {TableExampleComponent} from '../components/table-example/table-example.component';

@Component({
  selector: 'app-two-tables',
  templateUrl: './two-tables.component.html',
  styleUrls: ['./two-tables.component.css']
})
export class TwoTablesComponent {
  @ViewChildren(TableExampleComponent) tableExamples: QueryList<TableExampleComponent>;

  public rowIndex;
  public fromTable;
  public toTable;

  ngOnChanges(changes) {
    console.log(changes);
  }

  public moveRowToAnother() {
    let fTable = this.tableExamples[this.fromTable];
    let tTable = this.tableExamples[this.toTable];

    fTable.table.table.moveRowToAnother(tTable.table.table, this.rowIndex);
  }

}
