import { Component, OnInit, HostListener } from '@angular/core';
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

  ngOnInit(): void { }

  onShow() {
    this.isOpen = !this.isOpen;
  }

  toggleAccountMenu(event: MouseEvent) {
    event.stopPropagation();
    this.showAccountMenu = !this.showAccountMenu;
  }

  @HostListener('document:click')
  closeMenu() {
    this.showAccountMenu = false;
  }

  changeLanguage(event: any) {
    const selectedText = event.target.value;
    this.langService.setLanguage(selectedText);
  }
}
