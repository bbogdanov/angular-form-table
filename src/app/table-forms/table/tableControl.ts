import {FormArray} from '@angular/forms';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControl, AbstractControlOptions} from '@angular/forms/src/model';

export class TableControl extends FormArray {

  public constructor(controls: AbstractControl[],
                     validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
                     asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  /**
   * Removes a row from the table.
   *
   * If index is not provided the last row will be deleted.
   *
   * @param {number} index The position of the row in the table.
   */
  public pop(index?: number) {
    if (!index) this.removeAt(this.controls.length - 1);

    if (index || index === 0) {
      this.removeAt(index);
    }
  }

}
