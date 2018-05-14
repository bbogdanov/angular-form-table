import {Component, Input, Optional} from '@angular/core';
import {FormArray} from '@angular/forms';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControl, AbstractControlOptions} from '@angular/forms/src/model';
import {RowControl} from './row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {

  @Input()
  public row: RowControl;

  public ngOnInit() {
    console.log(this.row);
  }
}
