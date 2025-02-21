import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from Nagaraj {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(AppComponent);
