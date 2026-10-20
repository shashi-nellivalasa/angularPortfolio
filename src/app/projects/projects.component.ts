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
      projectName: 'Project 1',
      displayName: 'snChatFront',
      category: 'REALTIME CHAT WORKBENCH',
      description:
        'A full-featured real-time chat application featuring reactive messaging channels, user status broadcasts, modern UI controls, and responsive message feeds.',
      badgeColor: '#0284c7',
      accentColor: '#38bdf8',
      status: 'INSTALLERS READY',
      tags: ['ANGULAR 16', 'SOCKET.IO', 'NODE.JS', 'WEB'],
      link: 'https://github.com/shashin26',
      icon: 'pi pi-comments',
    },
    {
      id: '02',
      projectName: 'Project 2',
      displayName: 'AngularPortfolio',
      category: 'PORTFOLIO ENGINE & DESIGN SYSTEM',
      description:
        'Editorial portfolio architecture featuring dynamic scroll trackers, hairline grid layouts, custom dark/light themes, and responsive design systems.',
      badgeColor: '#ea580c',
      accentColor: '#fb923c',
      status: 'PRODUCTION READY',
      tags: ['ANGULAR', 'TYPESCRIPT', 'CSS3', 'RESPONSIVE'],
      link: 'https://github.com/shashin26',
      icon: 'pi pi-desktop',
    },
    {
      id: '03',
      projectName: 'Project 3',
      displayName: 'StoreCraft',
      category: 'FULL STACK COMMERCE WORKBENCH',
      description:
        'Dynamic web application with full product catalogs, shopping cart state management, user authentication flows, and MongoDB database persistence.',
      badgeColor: '#7c3aed',
      accentColor: '#a78bfa',
      status: 'IN DEVELOPMENT',
      tags: ['NODE.JS', 'EXPRESS', 'MONGODB', 'REST API'],
      link: 'https://github.com/shashin26',
      icon: 'pi pi-shopping-bag',
    },
    {
      id: '04',
      projectName: 'Project 4',
      displayName: 'TaskMatrix',
      category: 'DATA & PRODUCTIVITY WORKBENCH',
      description:
        'Interactive task tracking dashboard with analytics widgets, priority status boards, filterable query lists, and fluid transitions.',
      badgeColor: '#059669',
      accentColor: '#34d399',
      status: 'IN DEVELOPMENT',
      tags: ['JAVASCRIPT', 'HTML5', 'CSS3', 'PYTHON'],
      link: 'https://github.com/shashin26',
      icon: 'pi pi-chart-bar',
    },
  ];
}
