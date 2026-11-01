import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  copiedLinkedIn = false;
  copiedGitHub = false;

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
