import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Call the authentication service to verify login
    this.authService.login(this.loginData).subscribe(
      (response) => {
        // If login is successful, redirect to another component
        this.router.navigate(['/dashboard']); // Change '/dashboard' to your desired route
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login error (e.g., display error message)
      }
    );
  }
}

