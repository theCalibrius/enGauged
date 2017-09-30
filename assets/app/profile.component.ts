import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./views.styles.css']
})

export class ProfileComponent {

  pageName = 'profile';

   public sections = [{
        name: 'relationships'
    },
    {
        name: 'bio'
    },
    {
        name: 'preferences'
    },
    {
        name: 'account',
    }];

  pictureURL = 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_115/dariakhoroshavina_2405201721154.jpg';

  name = 'Heather';

  constructor(private router: Router) {
    
  }

  handleClick(sectionName) {
    console.log('click handler: ', sectionName);
    // this.router.navigateByUrl(sectionName);
  }
}