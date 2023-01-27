import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ThemeSelectorComponent } from './ui/theme-selector/theme-selector.component';

@NgModule({
	declarations: [ThemeSelectorComponent],
	imports: [CommonModule, DropdownModule, FormsModule, ButtonModule],
	exports: [ThemeSelectorComponent],
})
export class ThemeModule {}
