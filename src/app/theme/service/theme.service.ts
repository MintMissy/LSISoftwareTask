import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Theme } from '../model/theme.model';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private _theme: Theme = 'light';

	constructor(@Inject(DOCUMENT) private document: Document) {}

	get theme() {
		return this._theme;
	}

	setTheme(newTheme: Theme) {
		this._theme = newTheme;
		localStorage.setItem('theme', this._theme);
		this.update();
	}

	initialize(): void {
		let savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme === null) {
			savedTheme = 'light';
		}
		this.setTheme(savedTheme);
	}

	private update() {
		const themeLink = this.document.querySelector('#theme-link') as HTMLLinkElement;
		themeLink.href = `${this.theme}.css`;
	}
}
