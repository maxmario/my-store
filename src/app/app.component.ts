import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  widthImg = 10;

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  name = 'Mario';
  age = 32;
  img = 'https://cdn.dribbble.com/users/81809/screenshots/3443452/media/6a11de9a8c37373073f10d24cb17aabc.jpg';
  btnDisabled = true;

  person = {
    name: 'Mario',
    age: 32,
    avatar: 'https://cdn.dribbble.com/users/81809/screenshots/3443452/media/6a11de9a8c37373073f10d24cb17aabc.jpg'
  }

  items = [
    {name: 'Pan', price: 5},
    {name: 'Leche', price: 22},
    {name: 'Huevo', price: 32}
  ];

  products: Product[] = [
    {name: 'El mejor jugete', price: 565, image: './assets/images/toy.jpg'},
    {name: 'Bicicleta casi nueva', price: 356, image: './assets/images/bike.jpg'},
    {name: 'Colleción de albumnes', price: 34, image: './assets/images/album.jpg'},
    {name: 'Mis libros', price: 23, image: './assets/images/books.jpg'},
    {name: 'Casa para perro', price: 565, image: './assets/images/house.jpg'},
    {name: 'Gafas', price: 565, image: './assets/images/glasses.jpg'},
  ];

  newItem = {name: "",price: 0};

  names: String[] = ['Mario','Miriam','Angel']
  newName = '';

  public toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  public incraseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  addItem() {
    this.items.push({name:this.newItem.name,price: this.newItem.price});
    this.newItem.name='';
    this.newItem.price=0;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }

}


