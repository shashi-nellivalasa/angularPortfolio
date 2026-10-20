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
      degree: 'B.TECH / MECHANICAL ENGINEERING',
      duration: 'AUGUST 2017 — AUGUST 2021',
      institute: 'CMR ENGINEERING COLLEGE',
      score: 'CGPA: 6.91',
      description:
        "Completed my Bachelor's degree in Mechanical Engineering. Graduated on August 2021, from CMR Engineering College. Achieved an overall CGPA of 6.91 during my undergraduate studies.",
    },
    {
      step: '02',
      degree: 'INTERMEDIATE / MPC',
      duration: 'JUNE 2015 — MARCH 2017',
      institute: 'SRI GAYATRI JUNIOR COLLEGE',
      score: 'SCORE: 81.5%',
      description:
        'Completed my Intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC). Graduated on March 2017, from Sri Gayatri Junior College. Attained an overall percentage of 81.5% in my Intermediate studies.',
    },
    {
      step: '03',
      degree: 'SSC / 10TH STANDARD',
      duration: 'JUNE 2014 — MARCH 2015',
      institute: 'S. S. BHOOPATHY HIGH SCHOOL',
      score: 'CGPA: 8.3',
      description:
        'Completed my SSC/10th-grade education. Graduated on October 15, 2020, from S. S. Bhoopathy High School. Achieved an overall CGPA of 8.3 in my 10th-grade examinations.',
    },
  ];
}
