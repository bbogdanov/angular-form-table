import {Optional} from '@angular/core';
import {FormArray} from '@angular/forms';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControl, AbstractControlOptions} from '@angular/forms/src/model';

export class RowControl extends FormArray {

  public constructor(controls: AbstractControl[],
                     @Optional()
                       validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
                     @Optional()
                       asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(controls, validatorOrOpts, asyncValidator);
  }
}
