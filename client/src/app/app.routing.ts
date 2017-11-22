import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';

export const router: Routes = [
    { path: 'navbar', component: NavbarComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: ListComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });