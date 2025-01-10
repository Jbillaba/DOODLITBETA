import { Component  } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doodlr-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './doodlr-profile.component.html',
  styleUrl: './doodlr-profile.component.css'
})
export class DoodlrProfileComponent{
  constructor(private doodlrApiService: DoodlrApiService) {}
  user: any;
  doodles: any;
  doodlesLength;
  followers: any;
  followersLength;
  following: any;
  followingLength;

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
     this.doodlrApiService.getCurrentUserDoodles().subscribe(response => {this.doodles = response;
      this.doodlesLength = this.doodles.length;
     })
  }

  getFollowers(){
    this.doodlrApiService.getFollowers(this.user.id).subscribe((response) => {
      this.followers = response;
      this.followersLength = this.followers.length
    })
  }

  getFollowing(){
    this.doodlrApiService.getFollowing(this.user.id).subscribe((response) => {
      this.following = response;
      this.followingLength = this.following.length;
    })
  }

  uncheckStateBox(){
   const followingBox = document.querySelector("#modal-following") as HTMLInputElement
   const followerBox = document.querySelector("#modal-followers") as HTMLInputElement
    if(followingBox.checked || followerBox.checked == true ){
      followingBox.checked = false;
      followerBox.checked = false;
    }

  }

}
