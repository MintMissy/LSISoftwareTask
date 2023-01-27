import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyRates } from '../model/currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private httpClient: HttpClient) {}

  getCurrencyRates() {
    return this.httpClient.get<CurrencyRates[]>(
      'https://api.nbp.pl/api/exchangerates/tables/A/?format=json'
    );
  }
}
