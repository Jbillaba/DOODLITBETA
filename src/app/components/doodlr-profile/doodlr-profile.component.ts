import { Component  } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doodlr-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doodlr-profile.component.html',
  styleUrl: './doodlr-profile.component.css'
})
export class DoodlrProfileComponent{
  constructor(private doodlrApiService: DoodlrApiService) {}
  user: any;
  doodles: any;
  followers: any;
  following: any;

  ngOnInit(){
    this.getUser()
    this.getDoodles()
  }

  logData(){
    console.log(this.user)
  }

  getUser(){
    this.doodlrApiService.getCurrentUser().subscribe(response => this.user = response)
  }

  getDoodles(){
     this.doodlrApiService.getCurrentUserDoodles().subscribe(response => {this.doodles = response})
  }

  getFollowers(){
    this.doodlrApiService.getFollowers(this.user.id).subscribe(response => {this.followers = response})
  }

  getFollowing(){
    this.doodlrApiService.getFollowing(this.user.id).subscribe(response=> {this.following = response})
  }

}
