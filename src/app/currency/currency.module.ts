import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { CurrencyPageComponent } from './feature/currency-page/currency-page.component';
import { FilterCurrencyDataPipe } from './pipe/filter-currency-data.pipe';

@NgModule({
  declarations: [CurrencyPageComponent, FilterCurrencyDataPipe],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class CurrencyModule {}
