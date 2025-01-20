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

  // on loading the component we send a post to the token generator 
  // we do a countdown of 60 seconds, once 60 has past we can allow to get another token, maximum of 3 tries after which we tell them to come back later 
  // once we detect a value of 6, we validate the token

  getToken(){
    return this.doodlrApiService.grabOTP().subscribe()
  }

  authenticate(otp: string){
    return this.doodlrApiService.authenticateOTP(otp).subscribe()
  }

  


}
