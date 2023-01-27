import { Component, OnInit } from '@angular/core';
import { getAllThemes, Theme } from '../../model/theme.model';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent implements OnInit {
  themes = getAllThemes();
  selectedTheme!: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.selectedTheme = this.themeService.theme;
  }

  changeTheme(newTheme: Theme) {
    this.themeService.setTheme(newTheme);
  }
}
