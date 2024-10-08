import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(private doodlrApiService: DoodlrApiService,
              private router: Router,
              private storageService: StorageService){}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit(){
    const val = this.loginForm.value;
    if (val.username && val.password){
      this.doodlrApiService.loginUser(val.username, val.password).subscribe(
        data => {
          this.storageService.saveUser(data)
        }
      )
    }
    console.log(this.storageService.getToken())

  }

}
