import { Component } from '@angular/core';

export interface EducationItem {
  step: string;
  category: string;
  degree: string;
  duration: string;
  institute: string;
  score: string;
  scoreLabel: string;
  coursework: string[];
  description: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationList: EducationItem[] = [
    {
      step: 'ACAD.01',
      category: 'UNDERGRADUATE DEGREE',
      degree: 'Bachelor of Technology (Mechanical Engineering)',
      duration: 'JUNE 2017 — AUGUST 2021',
      institute: 'CMR Engineering College · Hyderabad, Telangana',
      score: '6.91 / 10.0',
      scoreLabel: 'FINAL CGPA',
      coursework: [
        'Computational Systems',
        'Analytical Calculus',
        'Finite Element Analysis',
        'Structural Dynamics',
      ],
      description:
        'Completed 4-year degree in Mechanical Engineering at CMR Engineering College (affiliated with JNTUH). Developed strong foundational discipline in systems architecture, algorithmic logic, and structural problem-solving.',
    },
    {
      step: 'ACAD.02',
      category: 'PRE-UNIVERSITY / HIGHER SECONDARY',
      degree: 'Intermediate (MPC - Mathematics, Physics, Chemistry)',
      duration: 'JUNE 2015 — MAY 2017',
      institute: 'Secondary Educational Institution · Hyderabad, Telangana',
      score: 'Awaiting Marks',
      scoreLabel: 'BOARD SCORE',
      coursework: [
        'Higher Mathematics',
        'Physical Sciences',
        'Chemical Systems',
        'Analytical Reasoning',
      ],
      description:
        'Intensive foundational curriculum focused on advanced mathematics, calculus, and physical sciences. Built the mathematical and logical reasoning foundations prerequisite for engineering discipline.',
    },
  ];
}
