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