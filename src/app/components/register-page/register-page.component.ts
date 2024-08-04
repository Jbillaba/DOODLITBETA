import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { Router } from '@angular/router';
import { MustMatch } from '../../helpers/must-match.validator';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  users:any;
  passMinLength: number = 8;

  constructor(private doodlrApiService: DoodlrApiService,
              private router: Router){}

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(this.passMinLength)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(this.passMinLength)]),
    
  }, {
    validators: MustMatch('password', 'password2')
  });

  onSubmit(){
    const val = this.registerForm.value;
    
    if (val.email && val.username && val.password && val.password2){
      this.doodlrApiService.registerUser(val.email, val.username, val.password, val.password2).subscribe(
        () => {
          this.router.navigateByUrl("/")
        }
      )
    }
  }

}
