import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Mario';
  age = 32;
  img = 'https://cdn.dribbble.com/users/81809/screenshots/3443452/media/6a11de9a8c37373073f10d24cb17aabc.jpg';
  btnDisabled = true;
  person = {
    name: 'Mario',
    age: 32,
    avatar: 'https://cdn.dribbble.com/users/81809/screenshots/3443452/media/6a11de9a8c37373073f10d24cb17aabc.jpg'
  }

  public toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  public incraseAge() {
    this.person.age += 1;
  }
}
