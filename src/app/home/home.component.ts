import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  copiedLinkedIn = false;
  copiedGitHub = false;
  isDarkMode = false;
  private themeObserver?: MutationObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkTheme();
      if ('MutationObserver' in window) {
        this.themeObserver = new MutationObserver(() => {
          this.checkTheme();
        });
        this.themeObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['data-theme', 'data-bs-theme'],
        });
      }
    }
  }

  private checkTheme(): void {
    if (typeof document !== 'undefined') {
      const theme = document.documentElement.getAttribute('data-theme');
      this.isDarkMode = theme === 'dark';
    }
  }

  ngOnDestroy(): void {
    this.themeObserver?.disconnect();
  }

  copyLinkedIn(): void {
    if (navigator && navigator.clipboard) {
      navigator.clipboard
        .writeText('https://www.linkedin.com/in/shashi-nellivalasa')
        .then(() => {
          this.copiedLinkedIn = true;
          setTimeout(() => {
            this.copiedLinkedIn = false;
          }, 2000);
        });
    }
  }

  copyGitHub(): void {
    if (navigator && navigator.clipboard) {
      navigator.clipboard
        .writeText('https://github.com/shashi-nellivalasa')
        .then(() => {
          this.copiedGitHub = true;
          setTimeout(() => {
            this.copiedGitHub = false;
          }, 2000);
        });
    }
  }

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 48;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
