import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  successMessage: string = '';
  constructor(private cartService: CartService){}

  addToCart(product:any){
    this.cartService.addToCart(product);
    this.successMessage = "Product added to cart ✅";

  setTimeout(() => {
    this.successMessage = '';
  }, 2000);
  }
  selectedCategory = 'All';

  products = [
   {
     id:1,
     name:"Gold Necklace",
     category:"Necklace",
     price:4500,
     image:"assets/images/necklace.jpg"
   },
   {
     id:2,
     name:"Diamond Ring",
     category:"Ring",
     price:17500,
     image:"assets/images/ring.jpg"
   },
   {
    id:3,
    name:"Pearl Earrings",
    category:"Earrings",
    price:2500,
    image:"assets/images/earrings.jpg"
  },
  {
    id:4,
    name:"Silver Bracelet",
    category:"Bracelet",
    price:3000,
    image:"assets/images/bracelet.jpg"
  },
  {
    id:5,
    name:"Green Stone Necklace ",
    category:"Necklace",
    price:4500,
    image:"assets/images/necklace2.jpg"
  },
  {
    id:6,
    name:"Diamond Ring",
    category:"Ring",
    price:20500,
    image:"assets/images/ring2.jpg"
  },
  {
   id:7,
   name:"Pearl Earrings",
   category:"Earrings",
   price:1800,
   image:"assets/images/earring2.jpg"
 },
 {
   id:8,
   name:"Gold Bracelet",
   category:"Bracelet",
   price:4500,
   image:"assets/images/bracelet2.jpg"
 },
 {
  id:9,
  name:"Gold Necklace",
  category:"Necklace",
  price:7500,
  image:"assets/images/necklace3.jpg"
},
{
  id:10,
  name:"Gold Ring",
  category:"Ring",
  price:10500,
  image:"assets/images/ring3.jpg"
},
{
 id:11,
 name:"Gold Earrings",
 category:"Earrings",
 price:1500,
 image:"assets/images/earring3.jpg"
},
{
 id:12,
 name:"Flower Bracelet",
 category:"Bracelet",
 price:2000,
 image:"assets/images/bracelet3.jpg"
},
{
  id:13,
  name:"Gold Necklace",
  category:"Necklace",
  price:4500,
  image:"assets/images/necklace4.jpg"
},
{
  id:14,
  name:"Rose Gold Ring",
  category:"Ring",
  price:5500,
  image:"assets/images/ring4.jpg"
},
{
 id:15,
 name:"Earrings",
 category:"Earrings",
 price:1500,
 image:"assets/images/earring4.jpg"
},
{
 id:16,
 name:"Gold Bracelet",
 category:"Bracelet",
 price:8000,
 image:"assets/images/bracelet4.jpg"
}
 ];
}
