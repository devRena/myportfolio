import { Route } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
      },
      { path: 'all-projects', component: ProjectsComponent },
    ],
  },
];
