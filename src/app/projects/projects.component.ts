import { Component } from '@angular/core';

export interface ProjectItem {
  id: string;
  projectName: string;
  displayName: string;
  category: string;
  description: string;
  badgeColor: string;
  accentColor: string;
  status: string;
  tags: string[];
  link: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: ProjectItem[] = [
    {
      id: '01',
      projectName: 'eKYC Platform',
      displayName: 'eKYC (SMC)',
      category: 'FINTECH & DEMAT ONBOARDING',
      description:
        'Digital onboarding platform for demat/trading applications. Implemented DigiLocker document verification, Digio penny drop & reverse penny drop bank verification, and compliant e-sign functionality with JWT/OAuth auth, role-based permissions, and field-level PII encryption.',
      badgeColor: '#0284c7',
      accentColor: '#38bdf8',
      status: 'ENTERPRISE PRODUCTION',
      tags: ['ANGULAR', 'TYPESCRIPT', 'RXJS', 'REST APIS', 'DIGILOCKER'],
      link: 'https://github.com/shashi-nellivalasa',
      icon: 'pi pi-id-card',
    },
    {
      id: '02',
      projectName: 'Periodic KYC Platform',
      displayName: 'Re-eKYC (SMC, Bajaj, Mirae Asset)',
      category: 'ENTERPRISE COMPLIANCE SUITE',
      description:
        'Multi-tenant periodic KYC renewal platform powering leading financial institutions (SMC, Bajaj, Mirae Asset). Integrated payment APIs for settlement, correction, and reconciliation with timestamp-based concurrency protection and secure field validation.',
      badgeColor: '#7c3aed',
      accentColor: '#a78bfa',
      status: 'MULTI-TENANT SAAS',
      tags: ['ANGULAR', 'TYPESCRIPT', 'RXJS', 'PAYMENT APIS', 'CONCURRENCY'],
      link: 'https://github.com/shashi-nellivalasa',
      icon: 'pi pi-shield',
    },
    {
      id: '03',
      projectName: 'Traffic Challan SaaS',
      displayName: 'PBB - Traffic Challan & Payments',
      category: 'HIGH-SCALE SAAS (100K+ USERS)',
      description:
        'Production fine management and settlement platform serving 100k+ users. Modeled master-detail relationships (cases → transactions → payments) with indexed MongoDB querying, developing 80+ secure REST APIs in Node.js/Express with JWT authentication.',
      badgeColor: '#059669',
      accentColor: '#34d399',
      status: '100K+ ACTIVE USERS',
      tags: ['TYPESCRIPT', 'NODE.JS', 'MONGODB', 'EXPRESS', 'ANGULAR'],
      link: 'https://github.com/shashi-nellivalasa',
      icon: 'pi pi-credit-card',
    },
    {
      id: '04',
      projectName: 'Criminal Justice System',
      displayName: 'PRIEM - Criminal Justice Management',
      category: 'ENTERPRISE RECORD SYSTEM',
      description:
        'Large-scale records management system across 30+ collections. Optimized MongoDB schema with aggregation pipelines reducing query latency from 5s to under 800ms. Engineered typed Angular ↔ Express communication with Excel/PDF/Word export and bulk ZIP processing.',
      badgeColor: '#ea580c',
      accentColor: '#fb923c',
      status: '60% LATENCY REDUCTION',
      tags: ['MONGODB', 'EXPRESS', 'ANGULAR', 'AGGREGATION', 'BULK ZIP'],
      link: 'https://github.com/shashi-nellivalasa',
      icon: 'pi pi-database',
    },
  ];
}
