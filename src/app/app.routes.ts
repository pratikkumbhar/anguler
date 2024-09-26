import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { LinkoneComponent } from './linkone/linkone.component';
import { LinktwoComponent } from './linktwo/linktwo.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'one', title: 'Page One', component: LinkoneComponent },
  { path: 'two', title: 'Page Two', component: LinktwoComponent },
  { path: 'login', title: 'login', component: LoginComponent },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: '**', title: 'error', component: ErrorComponent},
] ; 
