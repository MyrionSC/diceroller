import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultpipe'
})
export class ResultpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value < 0) {
        return '-';
    } else {
        return value;
    }
  }

}
