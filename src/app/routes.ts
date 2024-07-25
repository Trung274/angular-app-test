import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },

    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },

    {
      path: 'about',
      component: AboutComponent,
      title: 'About Me',
    },
    {
      path: 'education',
      component: EducationComponent,
      title: 'Education',
    },
    {
      path: 'experience',
      component: ExperienceComponent,
      title: 'Experience',
    },
    {
      path: 'skills',
      component: SkillsComponent,
      title: 'Skills',
    },
    {
      path: 'projects',
      component: ProjectsComponent,
      title: 'Projects',
    },

    {
      path: 'projects/:id',
      component: ProjectDetailsComponent,
      title: 'Project details',
    },

    {
      path: 'certifications',
      component: CertificationsComponent,
      title: 'Certifications',
    },
    {
      path: 'achievements',
      component: AchievementsComponent,
      title: 'Achievements',
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact',
    },
  ];
  export default routeConfig;