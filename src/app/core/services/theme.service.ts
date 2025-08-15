import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.style.setProperty('--bg-color-light', '#121212');
      document.body.style.setProperty('--text-color-light', '#FFFFFF');
      document.body.style.setProperty('--card-bg', '#1E1E1E');
    } else {
      document.body.style.setProperty('--bg-color-light', '#F8F9FA');
      document.body.style.setProperty('--text-color-light', '#333333');
      document.body.style.setProperty('--card-bg', '#FFFFFF');
    }
  }
}