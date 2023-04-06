import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// @Component({
//   selector: 'my-app',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <h1>Hello from {{name}}!</h1>
//     <a target="_blank" href="https://angular.io/start">
//       Learn more about Angular
//     </a>
//   `,
// })
// export class App {
//   name = 'Angular';
// }

// bootstrapApplication(App);
