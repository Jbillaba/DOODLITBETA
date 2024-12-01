import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  doodlr: any;
  constructor ( public doodlrApiService: DoodlrApiService, private authService: AuthService) {}

  logOut(){
    return this.doodlrApiService.logoutUser().subscribe()
  }

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

}
