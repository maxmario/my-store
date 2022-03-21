import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Mario';
  age = 32;
  img = 'https://static.platzi.com/media/meta_tags/og/OG-platzi-Dic-2019.png';
}
