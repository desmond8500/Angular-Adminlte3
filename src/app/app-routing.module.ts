import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProjectComponent } from './pages/project/project.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BoxesComponent } from './pages/boxes/boxes.component';
import { CardsComponent } from './pages/cards/cards.component';
import { MailsComponent } from './pages/mails/mails.component';
import { TablesComponent } from './pages/tables/tables.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'boxes', component: BoxesComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'mails', component: MailsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'project', component: ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
