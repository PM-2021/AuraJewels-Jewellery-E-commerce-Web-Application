import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser:any = null;
  isLoggedIn:boolean = false;
  isDropdownOpen:boolean = false;
  cartCount:number = 0;

  constructor(
    private authService:AuthService,
    private cartService:CartService,
    private router:Router
  ){}

  ngOnInit(){

    // ✅ Subscribe to login/logout changes
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
    });

    // ✅ cart reactive subscription
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
    
    this.updateCartCount();
  }

  updateCartCount(){
    this.cartCount = this.cartService.getCartCount();
  }

  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout(){
    this.authService.logout();   // ✅ IMPORTANT
    this.router.navigate(['/login']);
  }

  // close dropdown on outside click
  @HostListener('document:click', ['$event'])
  closeDropdown(event:any){
    if(!event.target.closest('.user-section')){
      this.isDropdownOpen = false;
    }
  }

}