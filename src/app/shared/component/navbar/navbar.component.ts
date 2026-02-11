import { Component, OnInit } from '@angular/core';
import { languages } from '../../const/data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen = false;
  showAccountMenu = false;

  labguageArr = languages;

  constructor(private langService: LanguageService) { }

  ngOnInit(): void {
    // Language is already loaded inside the service
  }

  onShow() {
    this.isOpen = !this.isOpen;
  }

  toggleAccountMenu() {
    this.showAccountMenu = !this.showAccountMenu;
  }

  changeLanguage(event: any) {
    const selectedText = event.target.value;
    this.langService.setLanguage(selectedText);
  }
}
