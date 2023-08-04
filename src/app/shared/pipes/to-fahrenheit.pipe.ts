import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(temperature: number): number {
    return +((temperature * 9 / 5) + 32).toFixed(3);
  }

}
