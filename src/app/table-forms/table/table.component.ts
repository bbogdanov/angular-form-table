import {Component, Input, OnInit, Optional} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, ValidatorFn} from '@angular/forms';
import {ITableComponentConfig} from './config/ITableComponent.config';
import {TableComponentConfig} from './config/TableComponent.config';
import {TableControl} from './tableControl';

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

  @Input()
  public configuration: ITableComponentConfig = new TableComponentConfig();

  public table: TableControl;

  public ngOnInit() {
    this.table = new TableControl(this.rows, this.validators, this.asyncValidators);
  }

}
