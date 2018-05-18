import {FormArray} from '@angular/forms';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControl, AbstractControlOptions} from '@angular/forms/src/model';

export class TableControl extends FormArray {

  public constructor(controls: AbstractControl[],
                     validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
                     asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(controls, validatorOrOpts, asyncValidator);
  }

}
