import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: string): string {
    console.log('pipe', value);
    return value.toUpperCase();
  }
}
