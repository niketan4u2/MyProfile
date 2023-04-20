import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperenceComponent } from './work-experence/work-experence.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    PersonalInformationComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    WorkExperenceComponent,
    ProjectsComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
