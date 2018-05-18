import {AbstractControl} from '@angular/forms';
import {TableControl} from '../table-forms/table/tableControl';

export const findTable = (parent: AbstractControl): TableControl => {
  if (!parent) return;

  if (parent instanceof TableControl) {
    return parent;
  } else {
    return findTable(parent.parent);
  }
};
