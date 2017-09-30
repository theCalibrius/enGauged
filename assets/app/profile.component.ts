import { Component } from '@angular/core';

@Component({
  selector: 'profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./views.styles.css']
})

export class ProfileComponent {

  pictureURL = 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_115/dariakhoroshavina_2405201721154.jpg';

  name = 'Heather';
}