import { Component } from '@angular/core';
import { CategorySelectorComponent } from '../categorySelector/categorySelector.component';
import { ContentPageContentComponent } from './contentPageContent.component';


@Component({
  selector: 'content-component',
  templateUrl: './content.component.html',
  styleUrls: ['../views.styles.css']
})

export class ContentComponent {

  pageName = 'content';
  categoryName = 'recommended';

   onCategoryChange(category: string) {
    this.categoryName = category;
  }

}