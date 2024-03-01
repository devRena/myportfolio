import { Component } from '@angular/core';
import { AboutComponent } from '../../shared/components/about/about.component';
import { ContactComponent } from '../../shared/components/contact/contact.component';
import { ExperienceComponent } from '../../shared/components/experience/experience.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HomeComponent } from '../../shared/components/home/home.component';
import { ProjectsPreviewComponent } from '../../shared/components/projects-preview/projects-preview.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectsPreviewComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class LandingComponent {}
