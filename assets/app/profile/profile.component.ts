import { Component } from '@angular/core';
import { CategorySelectorComponent } from '../categorySelector/categorySelector.component';

@Component({
  selector: 'profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['../views.styles.css']
})

export class ProfileComponent {

  pageName = 'profile';

  categoryName = 'relationships';

   // public sections = [{
   //      name: 'relationships'
   //  },
   //  {
   //      name: 'bio'
   //  },
   //  {
   //      name: 'preferences'
   //  },
   //  {
   //      name: 'account',
   //  }];

  pictureURL = 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_115/dariakhoroshavina_2405201721154.jpg';

  name = 'Heather';

  // constructor(private router: Router) {
    
  // n

  isCurrentCategory(testCategory) {
  	 return this.categoryName === testCategory;
  }

  onCategoryChange(category: string) {
    category = category.toLowerCase();
    this.categoryName = category;
  }
}