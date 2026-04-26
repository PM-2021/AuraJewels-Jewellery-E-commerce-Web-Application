import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm!: FormGroup;
  successMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  
  }
  signup(){

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const newUser = {
      id: Date.now(),
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      role: 'user'
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    this.successMessage = "Account created successfully";

    setTimeout(()=>{
      this.router.navigate(['/login']);
    },1500);

  }
}

