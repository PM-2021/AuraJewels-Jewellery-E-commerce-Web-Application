import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:any[] = [];

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor(){}

  addToCart(product:any){

    let existing = this.cartItems.find(p => p.id === product.id);

    if(existing){
      existing.quantity += 1;
    }else{
      this.cartItems.push({...product, quantity:1});
    }

    this.updateCartCount();
  }

  removeItem(index:number){
    this.cartItems.splice(index,1);
    this.updateCartCount();
  }

  getCartItems(){
    return this.cartItems;
  }

  getCartCount(){
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateCartCount(){
    this.cartCountSubject.next(this.getCartCount());
  }

  clearCart(){
    this.cartItems = [];
    this.updateCartCount(); 
  }
}