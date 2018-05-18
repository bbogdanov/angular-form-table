import {FormControl} from '@angular/forms';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControlOptions} from '@angular/forms/src/model';
import {findTable} from '../../utils/';
import {TableControl} from '../table/tableControl';

export class CellControl extends FormControl {

  public constructor(formState?: any,
                     validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
                     asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(formState, validatorOrOpts, asyncValidator);
  }

  public getTable(): TableControl {
    return findTable(this.parent);
  }
}
