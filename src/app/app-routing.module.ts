import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyPageComponent } from './currency/feature/currency-page/currency-page.component';

const routes: Routes = [
	{
		path: '',
		component: CurrencyPageComponent,
	},
	{
		path: '**',
		component: CurrencyPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
