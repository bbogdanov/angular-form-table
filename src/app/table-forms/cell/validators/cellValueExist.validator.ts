import {ValidationErrors, ValidatorFn} from '@angular/forms';
import {RowControl} from '../../row/row';
import {CellControl} from '../cell';

export const cellValueExist = (errors: ValidationErrors): ValidatorFn => {
  return (cell: CellControl): ValidationErrors | null => {
    let validationErrors = null;

    if (!cell.value) return validationErrors;

    if (!cell.value && cell.pristine) return validationErrors;

    const table = cell.getTable();

    if (table) {
      table.controls.forEach((row: RowControl) => {
        for (let cellKey in row.controls) {
          const currentCell = row.controls[cellKey];

          if (currentCell !== cell && cell.value === currentCell.value) {
            validationErrors = errors;
          }
        }
      });
    }

    return validationErrors;
  };
};
