import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instanceOf'
})
export class InstanceOfPipe implements PipeTransform {

  transform(value: any, type): boolean {
    console.log('value', value);
    console.log('type', type);
    return value.constructor.name === type;
  }

}
