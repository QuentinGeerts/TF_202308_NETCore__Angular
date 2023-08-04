import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform (temperature: number, baseUnite: string, targetUnite: string): number {

    if (baseUnite === 'fahrenheit') {
      if (targetUnite === 'celsius') temperature = this.toCelsius(temperature);
      else if (targetUnite === 'kelvin') temperature = this.toKelvin(temperature);
    }
    else if (baseUnite === 'celsius') {
      if (targetUnite === 'fahrenheit') temperature = this.toFahrenheit(temperature);
      else if (targetUnite === 'kelvin') temperature = this.toKelvin(temperature);
    }
    else if (baseUnite === 'kelvin') {
      if (targetUnite === 'celsius') temperature = this.toCelsius(temperature);
      else if (targetUnite === 'fahrenheit') temperature = this.toFahrenheit(temperature);
    }

    return +(temperature).toFixed(3);
  }

  private toCelsius (temperature: number): number {
    return (temperature * 9 / 5) + 32;
  }

  private toFahrenheit (temperature: number): number {
    return (temperature - 32) * 5 / 9;
  }

  private toKelvin (temperature: number): number {
    return (temperature - 273.15);
  }

}
