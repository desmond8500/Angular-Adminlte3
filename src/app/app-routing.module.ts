import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AgencesComponent } from './pages/agences/agences.component';
import { AgenceComponent } from './pages/agence/agence.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent},
  { path: 'agences', component: AgencesComponent},
  { path: 'agence', component: AgenceComponent},
  { path: 'favoris', component: FavorisComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'tickets', component: TicketsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'project', component: ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
