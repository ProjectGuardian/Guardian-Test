import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthGuardService } from './auth-guard.service';
import { TournamentHomeComponent } from './tournament/tournament-home/tournament-home.component';
import { UpdatePageComponent } from './announcement/update-page/update-page.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'register', component: RegisterComponent },
  { path: 'Admin', component:AdminComponent, canActivate:[AuthGuardService]},
  { path: 'tournament-home', component: TournamentHomeComponent, canActivate: [AuthGuardService]},
  { path: 'update-page', component: UpdatePageComponent, canActivate: [AuthGuardService]},
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService]},

  { path: '**', redirectTo: '' }
];
export const appRoutingModule = RouterModule.forRoot(routes);

