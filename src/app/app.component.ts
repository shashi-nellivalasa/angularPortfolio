import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

export interface SectionMeta {
  id: string;
  number: string;
  title: string;
  sideLabel: string;
  subtitle: string;
}

export interface FlowingChar {
  char: string;
  transform: string;
  opacity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Shashi Nellivalasa — Full Stack Web Developer';
  isDarkMode = false;
  mobileMenuOpen = false;
  scrollPercentage = 0;
  activeSectionId = 'home';
  flowingSection: SectionMeta | null = null;
  flowingChars: FlowingChar[] = [];

  sections: SectionMeta[] = [
    {
      id: 'home',
      number: '01',
      title: 'Home',
      sideLabel: 'Home',
      subtitle: 'Full Stack Engineering · Angular · Pure TypeScript',
    },
    {
      id: 'about',
      number: '02',
      title: 'About',
      sideLabel: 'About',
      subtitle: 'Full Stack Developer · Problem Solving & Architecture',
    },
    {
      id: 'education',
      number: '03',
      title: 'Education',
      sideLabel: 'Education',
      subtitle: 'Academic Foundations · Engineering Timeline',
    },
    {
      id: 'skills',
      number: '04',
      title: 'Skills',
      sideLabel: 'Skills',
      subtitle: 'Core Competencies · Architecture · Language Runtimes',
    },
    {
      id: 'projects',
      number: '05',
      title: 'Projects',
      sideLabel: 'Projects',
      subtitle: 'Interactive Applications · Architecture · Project Lineup',
    },
    {
      id: 'contact',
      number: '06',
      title: 'Contact',
      sideLabel: 'Contact',
      subtitle: 'Direct Inquiries · Full Stack Opportunities',
    },
  ];

  rulerSteps = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  private scrollRAF?: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
      this.initScrollTracker();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initNavTextAnimations();
      setTimeout(() => this.updateFlowingNavText(), 100);
    }
  }

  ngOnDestroy(): void {
    if (this.scrollRAF) {
      cancelAnimationFrame(this.scrollRAF);
    }
  }

  // --- GSAP Navigation Text Animations ---
  private initNavTextAnimations(): void {
    // 1. Top Navbar Text Stagger Entrance
    const topNavSpans = document.querySelectorAll(
      '.site-header .nav-link-btn span, .site-header .header-cta-btn'
    );
    if (topNavSpans.length > 0) {
      gsap.from(topNavSpans, {
        y: -14,
        opacity: 0,
        duration: 0.6,
        stagger: 0.035,
        ease: 'power2.out',
        delay: 0.1,
      });
    }

    // 2. Initial Side Rail Active Text Entrance
    const verticalText = document.querySelector('.active-vertical-text');
    if (verticalText) {
      gsap.from(verticalText, {
        y: 35,
        opacity: 0,
        letterSpacing: '0.24em',
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.25,
      });
    }

    // 3. Initial Side Rail Upcoming Items Entrance
    const upcomingBtns = document.querySelectorAll('.rail-upcoming-btn');
    if (upcomingBtns.length > 0) {
      gsap.from(upcomingBtns, {
        opacity: 0,
        y: 12,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power2.out',
        delay: 0.35,
      });
    }
  }

  // Animate Side Rail transition with GSAP when active section changes
  private animateSideRailTransition(direction: 'forward' | 'backward'): void {
    setTimeout(() => {
      // Animate active vertical text in center rail
      const activeLabel = document.querySelector('.active-vertical-label');
      if (activeLabel) {
        gsap.killTweensOf(activeLabel);
        gsap.fromTo(
          activeLabel,
          {
            y: direction === 'forward' ? 24 : -24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: 'power3.out',
          }
        );
      }

      // Animate passed items at top right
      const passedBtns = document.querySelectorAll('.rail-passed-btn');
      if (passedBtns.length > 0) {
        gsap.killTweensOf(passedBtns);
        gsap.fromTo(
          passedBtns,
          {
            opacity: 0,
            y: -6,
          },
          {
            opacity: 0.65,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
            ease: 'power2.out',
          }
        );
      }

      // Animate subsequent upcoming items at bottom right
      const upcomingBtns = document.querySelectorAll('.rail-upcoming-btn');
      if (upcomingBtns.length > 0) {
        gsap.killTweensOf(upcomingBtns);
        gsap.fromTo(
          upcomingBtns,
          {
            opacity: 0,
            y: 6,
          },
          {
            opacity: 0.55,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
            ease: 'power2.out',
          }
        );
      }
    }, 15);
  }

  // GSAP Hover Micro-Interactions
  onTopNavHover(enter: boolean, event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = event.currentTarget as HTMLElement;
    const span = target.querySelector('span');
    if (!span) return;
    gsap.to(span, {
      y: enter ? -1.5 : 0,
      duration: 0.2,
      ease: 'power1.out',
    });
  }

  onVerticalHover(enter: boolean, event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = event.currentTarget as HTMLElement;
    gsap.to(target, {
      x: enter ? -5 : 0,
      duration: 0.25,
      ease: 'power2.out',
    });
  }

  onSideBtnHover(enter: boolean, event: MouseEvent, baseOpacity: number = 0.55): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = event.currentTarget as HTMLElement;
    gsap.to(target, {
      x: enter ? -4 : 0,
      opacity: enter ? 1 : baseOpacity,
      duration: 0.2,
      ease: 'power2.out',
    });
  }

  // --- Theme Management ---
  private initTheme(): void {
    const savedTheme = localStorage.getItem('artcraft-theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (savedTheme === 'light') {
      this.isDarkMode = false;
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = prefersDark;
      document.documentElement.setAttribute(
        'data-theme',
        prefersDark ? 'dark' : 'light'
      );
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const themeStr = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themeStr);
    localStorage.setItem('artcraft-theme', themeStr);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen && isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const items = document.querySelectorAll('.mobile-drawer .mobile-nav-item');
        if (items.length > 0) {
          gsap.from(items, {
            x: 20,
            opacity: 0,
            duration: 0.35,
            stagger: 0.04,
            ease: 'power2.out',
          });
        }
      }, 10);
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  // Centralized active section switcher triggering GSAP animation
  setActiveSection(newId: string): void {
    if (this.activeSectionId === newId) return;

    const oldIndex = this.activeIndex;
    const newIndex = this.sections.findIndex((s) => s.id === newId);
    const direction = newIndex >= oldIndex ? 'forward' : 'backward';

    this.activeSectionId = newId;

    if (isPlatformBrowser(this.platformId)) {
      this.animateSideRailTransition(direction);
    }
  }

  // --- Navigation & Scrolling ---
  scrollToSection(sectionId: string): void {
    this.closeMobileMenu();
    this.setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 48;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  scrollToPercentage(pct: number): void {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetY = (pct / 100) * docHeight;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }

  // --- Scroll Progress, Flowing Text & Section Tracker ---
  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.scrollRAF) {
      cancelAnimationFrame(this.scrollRAF);
    }

    this.scrollRAF = requestAnimationFrame(() => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(
          100,
          Math.max(0, Math.round((window.scrollY / docHeight) * 100))
        );
        this.scrollPercentage = pct;
      } else {
        this.scrollPercentage = 0;
      }

      this.updateFlowingNavText();
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateFlowingNavText();
    }
  }

  updateFlowingNavText(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const railWidth = 250;
    const headerHeight = 48;
    const railHeight = window.innerHeight - headerHeight;
    // Character center positioned right along the vertical rail line
    const railX = 202;
    const bottomY = railHeight - 44;
    const R = 85; // Corner arc radius in px
    const L_arc = (Math.PI / 2) * R;
    const cx = railX - R;
    const cy = bottomY - R;

    // Find document top positions of all 6 sections
    const sectionTops: number[] = this.sections.map((s, idx) => {
      if (idx === 0) return 0;
      const el = document.getElementById(s.id);
      if (el) {
        return el.getBoundingClientRect().top + window.scrollY;
      }
      return idx * 750;
    });

    const scrollY = window.scrollY;
    const offset = 120;

    let activeIdx = 0;
    let nextIdx: number | null = 1;
    let progress = 0;

    const n = this.sections.length;
    for (let i = 0; i < n; i++) {
      const topCurrent = i === 0 ? 0 : sectionTops[i] - offset;
      const topNext = i + 1 < n ? sectionTops[i + 1] - offset : Infinity;

      if (scrollY >= topCurrent && scrollY < topNext) {
        activeIdx = i;
        if (i + 1 < n) {
          nextIdx = i + 1;
          const span = Math.max(1, topNext - topCurrent);
          progress = Math.max(0, Math.min(1, (scrollY - topCurrent) / span));
        } else {
          nextIdx = null;
          progress = 1;
        }
        break;
      }
    }

    if (activeIdx >= n - 1) {
      activeIdx = n - 1;
      nextIdx = null;
      progress = 1;
    }

    const currentActiveId = this.sections[activeIdx]?.id || 'home';
    if (this.activeSectionId !== currentActiveId) {
      this.setActiveSection(currentActiveId);
    }
  }

  trackByCharIndex(index: number): number {
    return index;
  }

  private initScrollTracker(): void {
    this.updateFlowingNavText();
  }


  // --- Section Helpers for Side Rail ---
  get activeIndex(): number {
    const idx = this.sections.findIndex((s) => s.id === this.activeSectionId);
    return idx >= 0 ? idx : 0;
  }

  get pastSections(): SectionMeta[] {
    return this.sections.slice(0, this.activeIndex);
  }

  get activeSection(): SectionMeta {
    return this.sections[this.activeIndex] || this.sections[0];
  }

  get upcomingSections(): SectionMeta[] {
    return this.sections.slice(this.activeIndex + 1);
  }

  get nextUpcomingSection(): SectionMeta | null {
    if (this.activeIndex + 1 < this.sections.length) {
      return this.sections[this.activeIndex + 1];
    }
    return null;
  }

  get subsequentSections(): SectionMeta[] {
    if (this.activeIndex + 2 < this.sections.length) {
      return this.sections.slice(this.activeIndex + 2);
    }
    return [];
  }

  formatPercentage(pct: number): string {
    return pct.toString().padStart(3, '0') + '%';
  }
}
