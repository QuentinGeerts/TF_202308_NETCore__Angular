import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-exercice09',
  templateUrl: './exercice09.component.html',
  styleUrls: ['./exercice09.component.scss']
})
export class Exercice09Component {

  cart: Article[] = [];

  productName: string = "";
  productQuantity: number = 1;


  addProduct (): void {

    if (this.productName.trim().length === 0) return;
    if (this.productQuantity < 1) return;

    let index = this.cart.findIndex(
      a => a.name.trim().toLowerCase() === this.productName.trim().toLowerCase()
    );

    if (index === -1)
      this.cart.push({ name: this.productName, quantity: this.productQuantity, dateAdd: new Date() });
    else
      this.cart[index].quantity += this.productQuantity;

    this.productName = "";
    this.productQuantity = 1;

    document.getElementById('product_name')?.focus();
  }

  removeProduct (product: Article): void {
    this.cart = this.cart.filter(a => a != product)
  }

  increase (index: number): void {
    this.cart[index].quantity++;
  }
  
  decrease (index: number): void {
    this.cart[index].quantity--;
    if (this.cart[index].quantity === 0) this.removeProduct(this.cart[index]);
  }

}
