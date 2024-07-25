import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginF: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private userService: UserService, private router: Router) {}

  onLogin(): void {
    if (this.loginF.invalid) {
      return;
    }
    this.userService.loginUser(this.loginF.value).subscribe(
      (res: any) => {
        console.log('Login successful', res);
        this.router.navigate(['/products']);
      },
      (error: any) => {
        console.error('Login failed', error);
        // Xử lý lỗi đăng nhập
      }
    );
  }

  public get email() {
    return this.loginF.get('email');
  }

  public get password() {
    return this.loginF.get('password');
  }
}
