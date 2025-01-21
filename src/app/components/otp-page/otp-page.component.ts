import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.css'
})
export class OtpPageComponent {

  constructor(private doodlrApiService: DoodlrApiService,
              private authService: AuthService
  ){}

  ngAfterViewInit(){
    this.listenToKeys()
  }

  // on loading the component we send a post to the token generator 
  // we do a countdown of 60 seconds, once 60 has past we can allow to get another token, maximum of 3 tries after which we tell them to come back later 
  // once we detect a value of 6, we validate the token

  getToken(){
    return this.doodlrApiService.grabOTP().subscribe()
  }

  authenticate(otp: string){
    return this.doodlrApiService.authenticateOTP(otp).subscribe()
  }

  listenToKeys(){
    var inputs = document.getElementsByClassName('otp_box')
    Array.from(inputs).forEach(function(input){
      input.addEventListener("keyup", function(e: KeyboardEvent) {
        if (e.key === 'Enter' || (input as HTMLInputElement ).value.length == 1 ){
          (input.nextElementSibling as HTMLElement ).focus()
        }
        if (e.key === 'Backspace'){
          (input.previousElementSibling as HTMLElement).focus()
        }
      })
    })
  }
  


}
