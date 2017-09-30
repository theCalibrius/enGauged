import { Component } from '@angular/core';
import { CategorySelectorComponent } from './categorySelector.component';
import { CategoryFilterPipe } from './filter-by-category.pipe';


@Component({
  selector: 'questions-component',
  templateUrl: './questions.component.html',
  styleUrls: ['./views.styles.css']
})

export class QuestionsComponent {


  pageName = 'questions';

  categoryName = 'about you';


  onCategoryChange(category: string) {
    this.categoryName = category;
  }

}


//