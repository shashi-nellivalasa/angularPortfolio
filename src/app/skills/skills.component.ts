import { Component } from '@angular/core';

export interface SkillItem {
  id: string;
  skillName: string;
  displayName: string;
  percentage: number;
  description: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: SkillItem[] = [
    {
      id: '01',
      skillName: 'Angular',
      displayName: 'Angular & TypeScript',
      percentage: 75,
      description:
        'Building dynamic, component-driven client architectures with TypeScript, RxJS Observables, reactive forms, dependency injection, and route guards.',
      icon: 'pi pi-bolt',
      category: 'FRONTEND ARCHITECTURE',
    },
    {
      id: '02',
      skillName: 'JavaScript',
      displayName: 'JavaScript (ES6+)',
      percentage: 80,
      description:
        'Mastery of modern ECMAScript specifications, asynchronous async/await patterns, DOM manipulation, functional programming, and clean code principles.',
      icon: 'pi pi-code',
      category: 'CORE RUNTIME',
    },
    {
      id: '03',
      skillName: 'Node.js',
      displayName: 'Node.js & Express',
      percentage: 75,
      description:
        'Engineering resilient server-side services, RESTful micro-endpoints, middleware pipelines, authentication tokens, and request lifecycle management.',
      icon: 'pi pi-server',
      category: 'BACKEND SERVICES',
    },
    {
      id: '04',
      skillName: 'HTML',
      displayName: 'HTML5 & Semantic Structure',
      percentage: 50,
      description:
        'Crafting accessible, SEO-compliant semantic markup hierarchy with standards-compliant layout structuring and cross-browser consistency.',
      icon: 'pi pi-compass',
      category: 'DOCUMENT STANDARDS',
    },
    {
      id: '05',
      skillName: 'CSS',
      displayName: 'CSS3 & Design Systems',
      percentage: 50,
      description:
        'Developing modular styling architectures with CSS variables, fluid responsive layouts, flexbox, CSS grid, and hardware-accelerated animations.',
      icon: 'pi pi-palette',
      category: 'STYLING & LAYOUT',
    },
    {
      id: '06',
      skillName: 'Python',
      displayName: 'Python & Data Scripting',
      percentage: 50,
      description:
        'Server-side automation, algorithmic problem solving, scripting utilities, data manipulation, and backend service integration.',
      icon: 'pi pi-cog',
      category: 'SYSTEMS & AUTOMATION',
    },
  ];
}
