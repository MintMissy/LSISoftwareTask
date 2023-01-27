import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { CurrencyPageComponent } from './feature/currency-page/currency-page.component';

@NgModule({
  declarations: [CurrencyPageComponent],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class CurrencyModule {}
