import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { KnobModule } from 'primeng/knob';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TimelineModule,
    CardModule,
    FormsModule,
    CheckboxModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'education', component: EducationComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ], { useHash: true }),
    KnobModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
