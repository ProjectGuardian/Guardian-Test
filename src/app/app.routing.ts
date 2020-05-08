import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { AdminComponent } from './admin/admin.component';
import { TournamentHomeComponent } from './tournament/tournament-home/tournament-home.component';
import { UpdatePageComponent } from './announcement/update-page/update-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Admin', component: AdminComponent, canActivate: [AuthGuard]},
    { path: 'tournament-home', component: TournamentHomeComponent, canActivate: [AuthGuard]},
    { path: 'update-page', component: UpdatePageComponent, canActivate: [AuthGuard]},

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);