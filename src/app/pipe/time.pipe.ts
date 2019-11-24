import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.substr(0, 4) + '/' + value.substr(5, 2) + '/' + value.substr(8, 2) + ' ' + value.substr(11, 2) + '時';
  }

}
