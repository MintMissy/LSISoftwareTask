import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CurrencyPageComponent } from './feature/currency-page/currency-page.component';


@NgModule({
  declarations: [
    CurrencyPageComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule
  ]
})
export class CurrencyModule { }
