import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: Object, args: any[] = null): string[] {
    return Object.keys(value);
  }

}
