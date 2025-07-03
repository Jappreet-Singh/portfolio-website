import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   title: 'About'
  // },
  {
    path: 'projects',
    component: ProjectComponent,
    title: 'Projects',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
