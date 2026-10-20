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
      skillName: 'Angular & RxJS',
      displayName: 'Angular, TypeScript & RxJS',
      percentage: 90,
      description:
        'Enterprise frontend development with Angular 16+, TypeScript, reactive forms, custom RxJS observables, DigiLocker / Digio e-KYC service integrations, and responsive component libraries.',
      icon: 'pi pi-bolt',
      category: 'FRONTEND ARCHITECTURE',
    },
    {
      id: '02',
      skillName: 'Node.js & Express',
      displayName: 'Node.js, Express & REST APIs',
      percentage: 88,
      description:
        'Authored 80+ REST APIs following API-first design and MVC architecture. Integrated JWT/OAuth authentication, role-based access controls, payment APIs, and real-time WebSockets.',
      icon: 'pi pi-server',
      category: 'BACKEND SERVICES',
    },
    {
      id: '03',
      skillName: 'MongoDB & SQL',
      displayName: 'MongoDB, IBM DB2 & SQL Server',
      percentage: 85,
      description:
        'Engineered master-detail data schemas across 30+ collections. Built complex aggregation pipelines and index strategies reducing reporting query latency by 60% (from 5s down to <800ms).',
      icon: 'pi pi-database',
      category: 'DATABASE PERSISTENCE',
    },
    {
      id: '04',
      skillName: 'TypeScript & JavaScript',
      displayName: 'TypeScript & Modern JavaScript',
      percentage: 92,
      description:
        'Mastery of strong compile-time typing, contract interfaces between client and server, asynchronous concurrency control, ES6+ specifications, and functional design patterns.',
      icon: 'pi pi-code',
      category: 'CORE LANGUAGES',
    },
    {
      id: '05',
      skillName: 'Cloud & DevOps',
      displayName: 'AWS & CI/CD Pipelines',
      percentage: 80,
      description:
        'Operating production systems on AWS cloud infrastructure. Configured automated CI/CD deployment pipelines, GitLab/GitHub version control workflows, and production monitoring.',
      icon: 'pi pi-cloud',
      category: 'CLOUD & DEVOPS',
    },
    {
      id: '06',
      skillName: 'Security & Quality',
      displayName: 'Security, JWT & API Testing',
      percentage: 85,
      description:
        'Field-level encryption for sensitive PII data, HTTPS transport security, Postman automated test suites, unit testing, timestamp-based concurrency protection, and Agile sprint delivery.',
      icon: 'pi pi-shield',
      category: 'SECURITY & QUALITY',
    },
  ];
}
