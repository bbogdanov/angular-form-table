import {Component, Input, OnInit, Optional} from '@angular/core';
import {AsyncValidatorFn, FormBuilder, FormGroup, ValidatorFn} from '@angular/forms';
import {RowControl} from '../row/row';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public form: FormGroup;

  @Input()
  public rows: RowControl[];

  @Input()
  @Optional()
  public validators: ValidatorFn[];

  @Input()
  @Optional()
  public asyncValidators: AsyncValidatorFn[];

  public constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.form = this.formBuilder.group(this.rows, {
      validator: this.validators,
      asyncValidator: this.asyncValidators
    });
  }

  public submit() {
    this.form.updateValueAndValidity();

    for (let control in this.form.controls) {
        console.log(this.form.controls[control].value);
    }
  }
}
