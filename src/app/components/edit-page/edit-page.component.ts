import { Component, KeyValueDiffers } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { AuthService } from '../../services/auth.service';
import { MustMatch } from '../../helpers/must-match.validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  passMinLength: number = 8;
  userAppears: boolean = false;
  passwordAppears: boolean = false;
  emailAppears: boolean = false;
  deleteAppears: boolean = false;
  whichBool: string;
  changePasswordForm = new FormGroup({
    old_password: new FormControl('', [Validators.required]),
    new_password: new FormControl('', [Validators.required, Validators.minLength(this.passMinLength)]),
    confirm_new_password: new FormControl('', [Validators.required, Validators.minLength(this.passMinLength)])
  }, {
    validators: MustMatch('new_password', 'confirm_new_password')
  })

  ngOnInit(){}
  
  ngAfterViewInit(){
    
  }

  open(){
    console.log(this.whichBool)
    this.userAppears = !this.userAppears;
  }

  changeUsername(){
    const newUsername = document.querySelector('#username') as HTMLInputElement
    console.log(newUsername.value)
  }

  changeEmail(){
    const newEmail = document.querySelector('#email') as HTMLInputElement
    console.log(newEmail.value)
  }

  changePassword(){
    const formValue = this.changePasswordForm.value;
    console.log(formValue)

  }

  deleteAccount(){
    const password = document.querySelector("#pass") as HTMLInputElement
    console.log(password.value)
  }

}
