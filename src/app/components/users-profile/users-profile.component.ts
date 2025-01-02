import { Component } from '@angular/core';
import { ActivatedRoute, Route, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoodlrApiService } from '../../services/doodlr-api.service';

@Component({
  selector: 'app-users-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.css'
})
export class UsersProfileComponent {
  id: string;
  user: any;
  doodles: any;
  following: any;
  followers: any;
  isFollowing: boolean = false;
  constructor(private doodlrApiService: DoodlrApiService,
              private route: ActivatedRoute){}

// idea for the code in ng on init came from here https://stackoverflow.com/a/78472466/19987328
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.doodlrApiService.getUser(this.id).subscribe(response => this.user = response)
      this.doodlrApiService.getUsersDoodles(this.id).subscribe(response => this.doodles = response)
      this.doodlrApiService.isFollowing(this.id).subscribe(response => {if(response == true){
        this.isFollowing = true
      }})

    });
  }

  followUser(){
    this.doodlrApiService.postFollow(this.user.url).subscribe()
  }

  unfollowUser(){
    console.log("pretend this unfollows")
  }

  userFollowing(){
    this.doodlrApiService.getFollowing(this.id).subscribe(response => this.following = response)
  }

  userFollowers(){
    this.doodlrApiService.getFollowers(this.id).subscribe(response => this.followers = response)
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
