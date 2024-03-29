import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelsius'
})
export class ToCelsiusPipe implements PipeTransform {

  transform(temperature: number): number {
    return +((temperature - 32) * 5 / 9).toFixed(3);
  }

}
