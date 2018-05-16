import {AbstractControl, FormControl} from '@angular/forms';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControlOptions} from '@angular/forms/src/model';
import {TableControl} from '../table/table';

export class CellControl extends FormControl {

  public constructor(formState?: any,
                     validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
                     asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(formState, validatorOrOpts, asyncValidator);
  }

  public getTable(): TableControl {
    return this.findTable(this.parent);
  }

  //TODO move that one to utils function.
  private findTable(parent: AbstractControl): TableControl {
    if (parent instanceof TableControl) {
      return parent;
    } else {
      return this.findTable(parent.parent);
    }
  }

}
