# 💎 AuraJewels – Jewellery E-commerce Web Application

A modern, responsive **Jewellery E-commerce Web Application** built using Angular.  
It allows users to browse products, manage cart items, and simulate a complete shopping experience with authentication and dynamic UI updates.

---

## 🚀 Tech Stack
- Angular 14
- TypeScript
- RxJS
- Bootstrap / CSS
- LocalStorage (for auth simulation)

---

## ✨ Features

### 👤 Authentication
- User Signup & Login (stored in localStorage)
- Reactive authentication using Angular services
- Dynamic navbar based on login state

### 🛍️ Product Management
- Browse jewellery products (rings, necklaces, etc.)
- Category-based filtering
- Responsive product cards UI

### 🛒 Cart Functionality
- Add to cart
- Increase / Decrease quantity
- Remove items
- Clear cart with confirmation
- Dynamic cart count in navbar
- Total price calculation

### 🎯 UI/UX Enhancements
- Dropdown menu for user account
- Responsive navbar
- Background images
- Clean and modern UI

---

## 🧠 Technical Highlights
- Built with Angular CLI
- Reactive Forms for authentication
- State management using RxJS BehaviorSubject
- Component-based architecture
- Service-based logic (AuthService, CartService)
- Optimized change detection (no heavy template calls)

---

## 📁 Project Structure

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

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/aura-jewels.git

# Navigate to project
cd aura-jewels

# Install dependencies
npm install

# Run application
ng serve

👉 Open: http://localhost:4200

📸 Screenshots
<p align="center"> <img src="https://github.com/PM-2021/AuraJewels-Jewellery-E-commerce-Web-Application/blob/main/src/assets/Screenshots/login.png" width="30%" /> <img src="https://github.com/PM-2021/AuraJewels-Jewellery-E-commerce-Web-Application/blob/main/src/assets/Screenshots/signup.png" width="30%" /> <img src="https://github.com/PM-2021/AuraJewels-Jewellery-E-commerce-Web-Application/blob/main/src/assets/Screenshots/home.png" width="30%" /> <img src="https://github.com/PM-2021/AuraJewels-Jewellery-E-commerce-Web-Application/blob/main/src/assets/Screenshots/products.png" width="30%" /> <img src="https://github.com/PM-2021/AuraJewels-Jewellery-E-commerce-Web-Application/blob/main/src/assets/Screenshots/cart.png" width="30%" /> </p>

📌 Future Improvements
Payment Gateway Integration
Backend API (Spring Boot / Node.js)
User Order History
Admin Dashboard
👨‍💻 Author

Pranjal Marathe