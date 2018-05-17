import {AbstractControl} from '@angular/forms';
import {TableControl} from '../table-forms/table/table';

export const findTable = (parent: AbstractControl): TableControl => {
  if (parent instanceof TableControl) {
    return parent;
  } else {
    return findTable(parent.parent);
  }
};
