import {Component, Input, OnInit, Optional} from '@angular/core';
import {FormArray} from '@angular/forms';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControl, AbstractControlOptions} from '@angular/forms/src/model';
import {RowControl} from './row';
import {sameValueValidator} from './validate/sameValue.validator';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input()
  public row: RowControl;

  public ngOnInit() {
    this.row.setValidators(sameValueValidator);
    console.log(this.row);
  }
}
