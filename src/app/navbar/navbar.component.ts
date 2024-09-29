import { Component, HostListener, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ScrollService } from '../seervice/scrolleservice';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  currentSection: string = '';

  constructor(private scrollService: ScrollService) {}

  onScrollToSection(section: string) {
    this.currentSection = section; // Update the current section
    this.scrollService.scrollToSection(section);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    sections.forEach(section => {
      const sectionId = section.getAttribute('id');
      if (sectionId) {
        const offsetTop = section.offsetTop ; // Adjust for navbar height
        const offsetBottom = section.offsetTop + section.offsetHeight ;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.currentSection = sectionId;
        }
      }
    });
} }
