import { Component, Input, OnInit } from '@angular/core';
import { CategoryFilterPipe } from './filter-by-category.pipe';

@Component({
  selector: 'question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./views.styles.css']
})

export class QuestionComponent implements OnInit {

@Input() questionLink: object;

@Input() categoryName: string;

 constructor(){}

  ngOnInit(){

  }

  myFunc(){
    alert("SUCCESS: function triggered");
  }


}