export interface CurrencyRates {
	table: string;
	no: string;
	effectiveDate: string;
	rates: CurrencyRate[];
}

export interface CurrencyRate {
	currency: string;
	code: string;
	mid: number;
}
