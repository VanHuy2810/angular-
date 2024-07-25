import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { UserService } from '../services/user.service'; // Đảm bảo đường dẫn đúng với vị trí của UserService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      retypePassword: new FormControl('', [Validators.required]),
    });

    this.registerForm.setValidators(this.passwordMatchValidator);
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: any } | null => {
    const password = control.get('password');
    const retypePassword = control.get('retypePassword');
    return password && retypePassword && password.value !== retypePassword.value
      ? { mismatch: true }
      : null;
  };

  onRegister() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.userService.registerUser(userData).subscribe(
        (response) => {
          alert('Registration successful');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    } else {
      console.error('Form is not valid');
    }
  }

  public get email() {
    return this.registerForm.get('email');
  }

  public get name() {
    return this.registerForm.get('name');
  }

  public get password() {
    return this.registerForm.get('password');
  }

  public get retypePassword() {
    return this.registerForm.get('retypePassword');
  }
}
