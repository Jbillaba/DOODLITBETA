import { Component, OnInit } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  doodles: any;
  Type: string = "NULL"

  constructor(private doodlrApiService: DoodlrApiService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
      this.doodlrApiService.getDoodles().subscribe(response => {this.doodles = response})

  }

  postYeah(doodlURL: string,){
    if (this.authService.isAuthenticated == true) {
      return this.doodlrApiService.postyeahs(doodlURL, this.Type).subscribe()
    }
    else {
      return this.router.navigateByUrl('/login');
    }
  }


}
