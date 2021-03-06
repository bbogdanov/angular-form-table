import {FormArray} from '@angular/forms';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControl, AbstractControlOptions} from '@angular/forms/src/model';
import {RowControl} from '../row/rowControl';

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
    if (!index) {
      this.removeAt(this.controls.length - 1);
    }

    if (index || index === 0) {
      this.removeAt(index);
    }
  }

  public moveRowToAnother(table: TableControl, rowIndex: number): void {
    if (!table && (!rowIndex || rowIndex !== 0)) {
      return;
    }

    const row = this.controls[rowIndex];

    table.push(row);

    this.pop(rowIndex);
  }

  /**
   * Updates and validates the entire table.
   *
   * Table > rows > row > cells
   */
  public updateAndValidateAll() {
    this.updateValueAndValidity();

    if (this.controls.length > 0) {
      this.controls.forEach((row: RowControl) => {
        row.updateValueAndValidity();

        if (Object.keys(row.controls).length > 0) {
          Object.keys(row.controls).forEach((cellKey: string | number) => {
            row.controls[cellKey].updateValueAndValidity();
            row.controls[cellKey].updateValueAndValidity();
          });
        }
      });
    }
  }

}
