import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { OtpGuardService } from './services/otp-guard.service';
import { FourohfourPageComponent } from './components/fourohfour-page/fourohfour-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DoodlePageComponent } from './components/doodle-page/doodle-page.component';
import { DoodlPostPageComponent } from './components/doodl-post-page/doodl-post-page.component';
import { DoodlrProfileComponent } from './components/doodlr-profile/doodlr-profile.component';
import { UsersProfileComponent } from './components/users-profile/users-profile.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { DoodleEditPageComponent } from './components/doodle-edit-page/doodle-edit-page.component';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { DoodleBookmarksComponent } from './components/doodle-bookmarks/doodle-bookmarks.component';
import { DoodleFormComponent } from './components/doodle-form/doodle-form.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'doodle', component: DoodlePageComponent, canActivate:[AuthGuardService]},
    { path: 'doodle/edit/:doodleid', component:DoodleEditPageComponent},
    { path: 'doodle/:doodleid', component: DoodlPostPageComponent},
    { path: 'doodleForm', component: DoodleFormComponent},
    { path: 'register', component: RegisterPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'profile/edit', component: EditPageComponent, canActivate:[OtpGuardService] },
    { path: 'profile', component: DoodlrProfileComponent, canActivate:[AuthGuardService] },
    { path: 'profile/:id', component: UsersProfileComponent },
    { path: 'bookmarks', component: DoodleBookmarksComponent, canActivate:[AuthGuardService]},
    { path: 'otp', component: OtpPageComponent },
    { path: '**', component: FourohfourPageComponent }
];
