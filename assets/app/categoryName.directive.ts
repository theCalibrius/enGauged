import {Component, Directive, Input, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Directive({
  selector: "[categoryName]"
})
export class CategoryNameDirective {
  @Input('categoryName') categoryName: string;
  
  ngOnInit() {
    // console.log(this.pageName);
  }
}