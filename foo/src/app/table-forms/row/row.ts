import {Optional} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormGroup, ValidatorFn} from '@angular/forms';
import {AbstractControlOptions} from '@angular/forms/src/model';

export class RowControl extends FormGroup {

  public constructor(controls: { [key: string]: AbstractControl },
                     @Optional()
                     validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
                     @Optional()
                     asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(controls, validatorOrOpts, asyncValidator);
  }

}
