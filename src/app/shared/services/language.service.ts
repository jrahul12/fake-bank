import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private langMap: any = {
    "English": "en",
    "Hindi": "hi",
    "Marathi": "mr",
    "Spanish": "es",
    "French": "fr",
    "German": "de",
    "Japanese": "ja",
    "Chinese": "zh"
  };

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.translate.use(savedLang);
    } else {
      this.translate.use('en');
    }
  }

  setLanguage(languageText: string) {
    const code = this.langMap[languageText] || 'en';
    this.translate.use(code);
    localStorage.setItem('lang', code);
  }

  getCurrentLanguage(): string {
    return localStorage.getItem('lang') || 'en';
  }
}
