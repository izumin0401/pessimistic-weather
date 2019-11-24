import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clouds'
})
export class CloudsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return String(value) + '%';
  }

}
