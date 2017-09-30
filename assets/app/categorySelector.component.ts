import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'category-selector',
  templateUrl: './categorySelector.component.html',
  styleUrls: ['./categorySelector.component.css']
})

export class CategorySelectorComponent implements OnInit{
  @Input() pageName: string;
  @Output() onCategoryChange = new EventEmitter<string>();

  page = 'content';

  categories = {
    tracker: ['Peter', 'Paul', 'Mary', 'All'],
    content: ['Recommended', 'Basics', 'Communication', 'All'],
    activities: ['Recommended', 'Dates', 'Conversations', 'All'],
    questions: ['About You', 'About Relationship', 'About Partner', 'All']
  };

  category = this.categories[this.page][0];


  constructor(private router: Router) {}

  handleRightClick() {
    // console.log('right Click');
    var currentIndex = this.categories[this.page].indexOf(this.category);
    var totalCategories = this.categories[this.page].length;

    if ( currentIndex === totalCategories - 1) {
    this.category = this.categories[this.page][0];
    this.onCategoryChange.emit(this.category);
    // this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
    } else {
    this.category = this.categories[this.page][currentIndex + 1];
    this.onCategoryChange.emit(this.category);
    // this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
    }
  }

  handleLeftClick() {
    // console.log('left Click');
    var currentIndex = this.categories[this.page].indexOf(this.category);
    var totalCategories = this.categories[this.page].length;

    if ( currentIndex === 0 ) {
    this.category = this.categories[this.page][totalCategories - 1];
    this.onCategoryChange.emit(this.category);
    // this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
    } else {
    this.category = this.categories[this.page][currentIndex - 1];
    this.onCategoryChange.emit(this.category);
    // this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
    }
  }

  ngOnInit() {
    this.page = this.pageName;
    this.category = this.categories[this.page][0];
    this.onCategoryChange.emit(this.category);
    // this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
  }

  }





// import { Component, Input, OnInit} from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'category-selector',
//   templateUrl: './categorySelector.component.html',
//   styleUrls: ['./categorySelector.component.css']
// })

// export class CategorySelectorComponent implements OnInit{
//   @Input() pageName: string;

//   page = 'content';

//   categories = {
//     tracker: ['Peter', 'Paul', 'Mary'],
//     content: ['recommended', 'basics', 'communication'],
//     activities: ['Recommended', 'Dates', 'Conversations'],
//     questions: ['About You', 'About Relationship', 'About Partner']
//   };

//   category = this.categories[this.page][0];


//   constructor(private router: Router) {}

//   handleRightClick() {
//     // console.log('right Click');
//     var currentIndex = this.categories[this.page].indexOf(this.category);
//     var totalCategories = this.categories[this.page].length;

//     if ( currentIndex === totalCategories - 1) {
//     this.category = this.categories[this.page][0];
//     this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
//     } else {
//     this.category = this.categories[this.page][currentIndex + 1];
//     this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
//     }
//   }

//   handleLeftClick() {
//     // console.log('left Click');
//     var currentIndex = this.categories[this.page].indexOf(this.category);
//     var totalCategories = this.categories[this.page].length;

//     if ( currentIndex === 0 ) {
//     this.category = this.categories[this.page][totalCategories - 1];
//     this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
//     } else {
//     this.category = this.categories[this.page][currentIndex - 1];
//     this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
//     }
//   }

//   ngOnInit() {
//     this.page = this.pageName;
//     this.category = this.categories[this.page][0];
//     this.router.navigate([this.page, {outlets: {'pageContent': [this.category]}}]);
//   }

//   }
