import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyRates } from '../../model/currency.model';
import { CurrencyService } from '../../service/currency.service';

@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.scss'],
})
export class CurrencyPageComponent implements OnInit {
  currencyRates$!: Observable<CurrencyRates[]>;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyRates$ = this.currencyService.getCurrencyRates();
  }
}
