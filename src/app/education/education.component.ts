import { Component } from '@angular/core';

export interface EducationEvent {
  step: string;
  degree: string;
  duration: string;
  institute: string;
  score: string;
  description: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  events: EducationEvent[] = [
    {
      step: '01',
      degree: 'FRONTEND DEVELOPER (ANGULAR DEVELOPER)',
      duration: 'APRIL 2026 — PRESENT',
      institute: 'INNODIGITAL SOLUTIONS PVT LTD · HYDERABAD',
      score: 'ENTERPRISE E-KYC',
      description:
        'Working as an Angular Frontend Developer on eKYC and re-eKYC platforms for demat and trading applications. Implemented DigiLocker services for digital verification, integrated Digio penny drop & reverse penny drop for bank verification, and deployed compliant e-sign document signing.',
    },
    {
      step: '02',
      degree: 'FULL STACK DEVELOPER',
      duration: 'JUNE 2023 — SEPTEMBER 2025',
      institute: 'NIVI SOFTWARE SOLUTIONS · HYDERABAD',
      score: '100K+ USERS · 80+ APIS',
      description:
        'Designed and operated production SaaS platforms serving 100k+ users. Developed 80+ REST APIs in Node.js & Express with JWT authentication, built reactive Angular apps with real-time WebSocket updates, and optimized MongoDB aggregation pipelines reducing query latency by 60%.',
    },
    {
      step: '03',
      degree: 'FULL STACK DEVELOPER INTERN',
      duration: 'MARCH 2023 — MAY 2023',
      institute: 'NIVI SOFTWARE SOLUTIONS · HYDERABAD',
      score: 'REST APIS · AGILE',
      description:
        'Assisted in building REST APIs using Node.js and Express following MVC architecture. Developed Angular components, integrated frontend with backend APIs, authored Postman test suites, and collaborated with senior developers in Agile sprint cycles.',
    },
    {
      step: '04',
      degree: 'BACHELOR OF TECHNOLOGY (MECHANICAL)',
      duration: 'JUNE 2017 — AUGUST 2021',
      institute: 'CMR ENGINEERING COLLEGE · HYDERABAD',
      score: 'CGPA: 6.91',
      description:
        'Completed Bachelor of Technology in Mechanical Engineering at CMR Engineering College (June 2017 – August 2021). Built core foundational logic in systems engineering, structural analysis, and algorithmic mathematics.',
    },
  ];
}
