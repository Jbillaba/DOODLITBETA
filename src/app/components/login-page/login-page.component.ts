import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  user: object;

  constructor(private doodlrApiService: DoodlrApiService,
              private router: Router,
              private authService: AuthService){}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit(){
    const val = this.loginForm.value;
    if (val.username && val.password){
      this.authService.isAuthenticated = true;
      this.doodlrApiService.loginUser(val.username, val.password).subscribe(
        (response) => {
          if (response) {
            this.router.navigateByUrl('/')
          }
        }
      );
    }
  }
}
