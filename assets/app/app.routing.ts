import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { AuthGuard } from "./auth/auth-guard.service";
import { AuthenticationPageComponent } from "./auth/authenticationPage.component";
import { ProfileComponent } from "./profile.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/profile', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
    { path: 'authenticate', component: AuthenticationPageComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);