import { Component } from '@angular/core';

export interface ExperienceItem {
  step: string;
  role: string;
  company: string;
  duration: string;
  scope: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      step: 'EXP.01',
      role: 'FRONTEND DEVELOPER (ANGULAR DEVELOPER)',
      company: 'INNODIGITAL SOLUTIONS PVT LTD · HYDERABAD',
      duration: 'APRIL 2026 — PRESENT',
      scope: 'ENTERPRISE E-KYC',
      description:
        'Working as an Angular Frontend Developer on eKYC and re-eKYC platforms for demat and trading applications. Implemented DigiLocker services for digital verification, integrated Digio penny drop & reverse penny drop for bank verification, and deployed compliant e-sign document signing.',
      tags: ['Angular 16', 'RxJS', 'DigiLocker', 'Digio API', 'Document E-Sign', 'TypeScript'],
    },
    {
      step: 'EXP.02',
      role: 'FULL STACK DEVELOPER',
      company: 'NIVI SOFTWARE SOLUTIONS · HYDERABAD',
      duration: 'JUNE 2023 — SEPTEMBER 2025',
      scope: '100K+ USERS · 80+ APIS',
      description:
        'Designed and operated production SaaS platforms serving 100k+ users. Developed 80+ REST APIs in Node.js & Express with JWT authentication, built reactive Angular apps with real-time WebSocket updates, and optimized MongoDB aggregation pipelines reducing query latency by 60%.',
      tags: ['Node.js', 'Express', 'Angular', 'MongoDB', 'WebSockets', 'JWT', 'REST APIs'],
    },
    {
      step: 'EXP.03',
      role: 'FULL STACK DEVELOPER INTERN',
      company: 'NIVI SOFTWARE SOLUTIONS · HYDERABAD',
      duration: 'MARCH 2023 — MAY 2023',
      scope: 'REST APIS · AGILE',
      description:
        'Assisted in building REST APIs using Node.js and Express following MVC architecture. Developed Angular components, integrated frontend with backend APIs, authored Postman test suites, and collaborated with senior developers in Agile sprint cycles.',
      tags: ['Node.js', 'Express', 'Angular', 'Postman', 'Git', 'Agile / Scrum'],
    },
  ];
}
