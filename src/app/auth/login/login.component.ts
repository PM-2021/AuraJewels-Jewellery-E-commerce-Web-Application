import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(){

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const { email, password } = this.loginForm.value;

    const user = users.find((u:any) =>
      u.email === email && u.password === password
    );

    if(user){

      this.auth.login(user);   

      this.router.navigate(['/home']);

    }else{
      this.errorMessage = "Invalid email or password";
    }

  }
}