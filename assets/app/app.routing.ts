import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { AuthGuard } from "./auth/auth-guard.service";
// import { AuthenticationPageComponent } from "./auth/authenticationPage.component";
import { ProfileComponent } from "./profile/profile.component";
import { TrackerComponent } from './tracker/tracker.component';
import { ContentComponent } from './content/content.component';
import { ActivitiesComponent } from './activities/activities.component';
import { QuestionsComponent } from './questions/questions.component';



const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'tracker', component: TrackerComponent, canActivate: [AuthGuard] },
    { path: 'content', component: ContentComponent, canActivate: [AuthGuard] },
    { path: 'activities', component: ActivitiesComponent,  canActivate: [AuthGuard]},
    { path: 'questions', component: QuestionsComponent, canActivate: [AuthGuard]},
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
  
];

export const routing = RouterModule.forRoot(APP_ROUTES);

// Once a user is authenticated, they are directed first to the profile page, since the 
// root path redirects to the profile page.