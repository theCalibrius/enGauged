import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./views.styles.css']
})

export class HeaderComponent {
  title = 'header';
  currentPage = 'profile';

  public pages = [{
        name: 'profile',
        label: 'Profile',
        glyph: 'glyphicon-user'
    },
    {
        name: 'tracker',
        label: 'Tracker',
        glyph: 'glyphicon-signal'
    },
    {
        name: 'content',
        label: 'Content',
        glyph: 'glyphicon-expand'
    },
    {
        name: 'activities',
        label: 'Activities',
        glyph: 'glyphicon-plane'
    },
    {
        name: 'questions',
        label: 'Questions',
        glyph: 'glyphicon-question-sign'
    }];

  constructor(private router: Router) {
    
  }

  handleClick(pageName) {
    console.log(pageName);
    this.currentPage = pageName;
    this.router.navigateByUrl(this.currentPage);
  }
}










// OLD DUMMY CODE
// import { Component } from "@angular/core";

// @Component({
//     selector: 'app-header',
//     template: `
//         <header class="row">
//             <nav class="col-md-8 col-md-offset-2">
//                 <ul class="nav nav-pills">
//                     <li routerLinkActive="active"><a [routerLink]="['/messages']">Feed</a></li>
//                     <li routerLinkActive="active"><a [routerLink]="['/auth']">Login/Logout</a></li>
//                 </ul>
//             </nav>
//         </header>
//     `
// })

// // The routerLinkActive directive above highlights whichever link is active right now.  If we're on the messages page, the messages link is highlighted.

// export class HeaderComponent {

// }