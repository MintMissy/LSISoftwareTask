import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyRates } from '../model/currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private httpClient: HttpClient) {}

  getCurrencyRates(date: null | Date) {
    if (date === null) {
      return this.httpClient.get<CurrencyRates[]>(
        'https://api.nbp.pl/api/exchangerates/tables/A/?format=json'
      );
    }

    console.log(date);

    const dateString =
      date.getFullYear() + '-' + this.formatDate(date.getMonth() + 1) + '-' + this.formatDate(date.getDate());

    return this.httpClient.get<CurrencyRates[]>(
      `http://api.nbp.pl/api/exchangerates/tables/A/${dateString}/?format=json`
    );
  }

  formatDate(number: number) {
    return number < 9 ? `0` + number : number;
  }
}
