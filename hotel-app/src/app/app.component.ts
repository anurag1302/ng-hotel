import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>Hey there</h1>', -- inline html can be written here
  // template:`<h1>I like pizza</h1> -- multi line inline html can be written using tilde
  // <p>Margarita pizza is best</p>
  // `,
  styleUrl: './app.component.scss',
  //styles:[`h1{color:red;}`] -- inline styles are also supported
})
export class AppComponent {
  title = 'hotel-app';
}
