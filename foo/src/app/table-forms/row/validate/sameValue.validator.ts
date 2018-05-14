import {ValidatorFn} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {AbstractControl} from '@angular/forms/src/model';

export function sameValueValidator(control: AbstractControl): ValidationErrors | null{
  const table = control.parent;

  let result = null;

  if(table) {
    for (let row in table.controls) {
      if (table.controls[row].value) {
        for( let cell in table.controls[row].value) {
          if(table.controls[row].value[cell] === control.value[cell]) {
            result = {
              'error': 'Same value already exist.',
              'row': table.controls[row]
            }
          }
        }
      }
    }
  }

  return result;
}
