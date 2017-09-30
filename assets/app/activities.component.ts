import { Component } from '@angular/core';
import { CategorySelectorComponent } from './categorySelector.component';
import { ActivitiesPageContentComponent  } from './activitiesPageContent.component';


@Component({
  selector: 'activities-component',
  templateUrl: './activities.component.html',
  styleUrls: ['./views.styles.css']
})

export class ActivitiesComponent {

  pageName = 'activities';
  categoryName = 'recommended';

  onCategoryChange(category: string) {
    this.categoryName = category;
  }

}