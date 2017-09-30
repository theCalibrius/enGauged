import {Component, Directive, Input, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Directive({
  selector: "[pageName]"
})
export class PageNameDirective {
  @Input('pageName') pageName: string;
  
  ngOnInit() {
    // console.log(this.pageName);
  }
}