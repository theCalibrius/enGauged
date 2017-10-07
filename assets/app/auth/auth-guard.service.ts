// This service utilizes a built in Angular module called CanActivate in order
// to provide route protection so that only authenticated users can access certain routes
// If a token is found in local storage, the user is authenticated and they can access
// a protected route.  If no token is found, they're redirected to the auth route,
// which takes them to the login / signup page
// This service is implemented in the app.routing.ts file on protected routes
// You can see that certain routes are protected because they'll have the following in their route definition:
// canActivate: [AuthGuard]

import { Injectable }   from '@angular/core';
import { CanActivate }  from '@angular/router';
import { Router } from "@angular/router";
import { AUTH_ROUTES } from "./auth.routes";
import { routing } from "../app.routing";

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate() {
    if ( localStorage.getItem('token') !== null ) {
      console.log('AuthGuard:  user logged in!');
      return true;
    } else {
      console.log('AuthGuard:  USER NOT LOGGED IN');
      this.router.navigateByUrl('auth');
      return false;
    }
  }
}


// export class LogoutComponent {
//     constructor(private authService: AuthService, private router: Router) {}

//     onLogout() {
//         this.authService.logout();
//         this.router.navigate(['/auth', 'signin']);
//     }
// }

