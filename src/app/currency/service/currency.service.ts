import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formatMin2Digits } from 'src/app/core/utils/date.util';
import { CurrencyRates } from '../model/currency.model';
@Injectable({
	providedIn: 'root',
})
export class CurrencyService {
	constructor(private httpClient: HttpClient) {}

	getCurrencyRates(date: null | Date) {
		if (date === null) {
			return this.httpClient.get<CurrencyRates[]>('https://api.nbp.pl/api/exchangerates/tables/A/?format=json');
		}

		const dateString =
			date.getFullYear() + '-' + formatMin2Digits(date.getMonth() + 1) + '-' + formatMin2Digits(date.getDate());

		return this.httpClient.get<CurrencyRates[]>(
			`http://api.nbp.pl/api/exchangerates/tables/A/${dateString}/?format=json`
		);
	}
}
