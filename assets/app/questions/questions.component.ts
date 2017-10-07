import { Component } from '@angular/core';
import { CategorySelectorComponent } from '../categorySelector/categorySelector.component';
import { CategoryFilterPipe } from '../categorySelector/filter-by-category.pipe';


@Component({
  selector: 'questions-component',
  templateUrl: './questions.component.html',
  styleUrls: ['../views.styles.css']
})

export class QuestionsComponent {


  pageName = 'questions';

  categoryName = 'about you';


  onCategoryChange(category: string) {
    this.categoryName = category;
  }

}


//