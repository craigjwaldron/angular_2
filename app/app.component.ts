import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{heading}}</h1>
    <my-photos></my-photos>
  `
})
export class AppComponent {
  heading = "Unsplash Photos"
}
