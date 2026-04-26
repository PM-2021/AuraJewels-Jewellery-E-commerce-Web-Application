💎 AuraJewels – Jewellery E-commerce Web Application

A modern and responsive Jewellery E-commerce Web Application built using Angular.
This application allows users to browse products, manage cart items, and simulate a complete shopping experience with authentication and dynamic UI updates.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

# Features

👤 Authentication
User Signup & Login (stored in localStorage)
Reactive authentication using service
Dynamic navbar based on login state

🛍️ Product Management
Display jewellery products (rings, necklaces, etc.)
Category-based filtering
Responsive product cards UI

🛒 Cart Functionality
Add to cart
Increase / Decrease quantity
Remove items from cart
Clear cart with confirmation
Dynamic cart count in navbar
Total price calculation

🎯 UI/UX Enhancements
Dropdown menu for user account
Background images for pages
Responsive navbar layout
Clean and modern styling

🧠 Technical Highlights
Built with Angular 14
Uses Reactive Forms for login/signup
State management using RxJS BehaviorSubject
Component-based architecture
Service-based logic separation (AuthService, CartService)
Efficient change detection (no function calls in templates)

# Project Structure
src/
 ┣ app/
 ┃ ┣ components/
 ┃ ┃ ┣ navbar/
 ┃ ┃ ┣ login/
 ┃ ┃ ┣ signup/
 ┃ ┃ ┣ products/
 ┃ ┃ ┣ cart/
 ┃ ┣ services/
 ┃ ┃ ┣ auth.service.ts
 ┃ ┃ ┣ cart.service.ts
 ┃ ┣ app-routing.module.ts
 ┃ ┣ app.module.ts


⚙️ Installation & Setup
 # Clone repository
git clone https://github.com/your-username/aura-jewels.git

# Navigate to project
cd aura-jewels

# Install dependencies
npm install

# Run application
ng serve

# Open in browser:
http://localhost:4200


📸 Screenshots
<p align="center">
  <img src="../Accessories/src/assets/Screenshots/login.png" width="30%" />
  <img src="../Accessories/src/assets/Screenshots/signup.png" width="30%" />
  <img src="../Accessories/src/assets/Screenshots/home.png" width="30%" />
  <img src="../Accessories/src/assets/Screenshots/products.png" width="30%" />
  <img src="../Accessories/src/assets/Screenshots/cart.png" width="30%" />
</p>