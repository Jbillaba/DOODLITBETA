import { Routes } from '@angular/router';
import { FourohfourPageComponent } from './components/fourohfour-page/fourohfour-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DoodlePageComponent } from './components/doodle-page/doodle-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'doodle', component: DoodlePageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path:'login', component: LoginPageComponent },
    { path: '**', component: FourohfourPageComponent }
];
