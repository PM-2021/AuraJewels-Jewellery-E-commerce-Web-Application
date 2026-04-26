import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any[] = [];
  totalPrice:number = 0;

  constructor(public cartService: CartService){}

  ngOnInit(){
    this.loadCart();
  }

  loadCart(){
    this.cartItems = this.cartService.getCartItems() || [];
    this.calculateTotal();
  }

  increaseQty(i:number){
    this.cartItems[i].quantity++;
    this.calculateTotal();
    this.cartService.updateCartCount();
  }

  decreaseQty(i:number){
    if(this.cartItems[i].quantity > 1){
      this.cartItems[i].quantity--;
      this.calculateTotal();
      this.cartService.updateCartCount();
    }
  }

  removeItem(i:number){
    this.cartService.removeItem(i);
    this.loadCart();
  }

  clearCart(){
    const confirmClear = confirm("Are you sure you want to clear your cart?");

    if(confirmClear){
    this.cartService.clearCart();
    this.loadCart();
  }
  }

  calculateTotal(){
    this.totalPrice = this.cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

}