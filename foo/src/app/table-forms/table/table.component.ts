import {Component, Input, OnInit, Optional} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, ValidatorFn} from '@angular/forms';
import {TableControl} from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  public rows: AbstractControl[];

  @Input()
  @Optional()
  public validators: ValidatorFn[];

  @Input()
  @Optional()
  public asyncValidators: AsyncValidatorFn[];

  public table: TableControl;

  public ngOnInit() {
    this.table = new TableControl(this.rows);
  }
  
}
