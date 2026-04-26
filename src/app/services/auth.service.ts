import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<any>(this.getUser());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {}

  private getUser(){
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  login(user:any){
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user); // notify all components
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null); // notify all components
  }

  isLoggedIn(){
    return !!this.currentUserSubject.value;
  }

}