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
              private authService: AuthService,
              private router: Router
  ){}
  otpForm = new FormData()

  ngOnInit(){
    this.isAuth()
    this.getToken()
  }

  ngAfterViewInit(){
    this.listenToKeys()
    this.authenticate()
  }

  isAuth(){
    this.authService.isLoggedIn()
    if ( this.authService.isAuthenticated != true ){
        this.router.navigateByUrl('/login')
    }
  }

  getToken(){
    if(this.authService.isAuthenticated != false){
       this.doodlrApiService.grabOTP().subscribe()
    }
  }

  authenticate(){
    if(this.authService.isAuthenticated != false){
      let code: Array<string> = []
      var inputs = document.getElementsByClassName('otp_box')
      Array.from(inputs).forEach((input)=>{
        input.addEventListener("input", ()=>{
          let char = (input as HTMLInputElement).value
          code.push(char)
          if(code.length == 6){
            let otp = code.join('')
            this.otpForm.append('otp', otp)
            this.doodlrApiService.authenticateOTP(this.otpForm).subscribe((res) => this.router.navigateByUrl('/profile/edit'))
          }
        })
      })
    }
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
