import { Component, Input } from '@angular/core';
import { CategoryFilterPipe } from './filter-by-category.pipe';




@Component({
  selector: 'question-content',
  templateUrl: './questionContent.component.html',
  styleUrls: ['./views.styles.css']
})

export class QuestionContentComponent {
// @Input() questionLink: object;

@Input() categoryName: string;

questions = [{

        thumbnail: 'https://static.pexels.com/photos/40748/ghosts-gespenter-spooky-horror-40748.jpeg',
        category: 'about you',
        title: 'Do you like Horror Movies?',

    },
    {
        thumbnail: 'https://static.pexels.com/photos/220444/pexels-photo-220444.jpeg',
        category: 'about you',
        title: 'Have you ever travelled around another country alone?',
    },
    {
        thumbnail: 'https://static.pexels.com/photos/382167/pexels-photo-382167.jpeg',
        category: 'about you',
        title: "Wouldn't it be fun to chuck it all and go live on a sailboat?",
        link: 'https://lifehacker.com/these-three-questions-tell-you-if-your-relationship-is-1543213637'
    },
    {
        thumbnail: 'https://static.pexels.com/photos/349494/pexels-photo-349494.jpeg',
        category: 'about relationship',
        title: "Do you think your partner would be happier if you weren't together?",
    },
    {
        thumbnail: 'https://static.pexels.com/photos/594226/pexels-photo-594226.jpeg',
        category: 'about relationship',
        title: "Do you think you would be happier if you and your partner weren't together?",
    },
        {
        thumbnail: 'https://static.pexels.com/photos/220836/pexels-photo-220836.jpeg',
        category: 'about relationship',
        title: 'Do you want to separate?',
    },
    {
        thumbnail: 'https://static.pexels.com/photos/64057/pexels-photo-64057.jpeg',
        category: 'about partner',
        title: "Do You Feel Understood By Your Partner?"
    },
    {
        thumbnail: 'https://static.pexels.com/photos/262140/pexels-photo-262140.jpeg',
        category: 'about partner',
        title: "Do You Think Your Partner Is Happy?",
    },
    {
        thumbnail: 'https://static.pexels.com/photos/265702/pexels-photo-265702.jpeg',
        category: 'about partner',
        title: "Do You Trust Your Partner?",
    }
    ];

  // ngOnInit(){
  // }

  myFunc(question){
   var temp = [];
   this.questions.forEach(function(item, index){
      if(item.title !== question.title){
       temp.push(item)
      }
    })
  this.questions = temp
  }

}