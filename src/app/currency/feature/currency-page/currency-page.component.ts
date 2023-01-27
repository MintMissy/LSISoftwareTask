import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyRates } from '../../model/currency.model';
import { DataFilter } from '../../pipe/filter-currency-data.pipe';
import { CurrencyService } from '../../service/currency.service';

@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.scss'],
})
export class CurrencyPageComponent implements OnInit {
  currencyRates$!: Observable<CurrencyRates[]>;
  date: null | Date = null;

  appliedFilters: DataFilter[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyRates$ = this.currencyService.getCurrencyRates(this.date);
  }

  onDateUpdate($event: Date) {
    this.currencyRates$ = this.currencyService.getCurrencyRates(this.date);
  }

  toggleFilter(filter: DataFilter) {
    const index = this.appliedFilters.indexOf(filter);
    if (index === -1) {
      this.appliedFilters.push(filter);
    } else {
      this.appliedFilters.splice(index, 1);
    }
  }

  resetFilters() {
    this.appliedFilters = [];
  }
}
