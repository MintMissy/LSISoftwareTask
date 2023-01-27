import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyRate } from '../model/currency.model';

export type DataFilter = 'code' | 'currency' | 'mid';

@Pipe({
  name: 'filterCurrencyData'
})
export class FilterCurrencyDataPipe implements PipeTransform {

  transform(currencyRates: CurrencyRate[], appliedFilters: DataFilter[]): CurrencyRate[] {
    const rates = [...currencyRates].sort((a, b) => -1);

    return rates;
  }
}
