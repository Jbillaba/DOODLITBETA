import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { AuthService } from '../../services/auth.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-users-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.css'
})
export class UsersProfileComponent {
  id: string;
  following_id: string;
  user: any;
  doodles: any;
  doodlesLength;
  following: any;
  followingLength;
  followers: any;
  followersLength;
  following_obj: any; // this is declared in the isFollowing function to set the follow id to following_id to delete it
  isFollowing: boolean = false;
  isUser: boolean;
  constructor(private doodlrApiService: DoodlrApiService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router ){}

// idea for the code in ng on init came from here https://stackoverflow.com/a/78472466/19987328
  ngOnInit(){
    this.userInfo()
    this.userFollowing()
    this.userFollowers()
  }
    

  userInfo(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.doodlrApiService.getUser(this.id).subscribe(response => this.user = response)
      this.doodlrApiService.getUsersDoodles(this.id).subscribe((response) => {
        this.doodles = response;
        this.doodlesLength = this.doodles.length
        })
      this.isUserCheck(this.id)
      this.isUser != true ? this.checkIfFollowing(this.id) : null  
    });
  }

  checkIfFollowing(id: string){
    if(this.authService.isAuthenticated != false){
      this.doodlrApiService.isFollowing(id).subscribe((response) => {
        if (response != false){
          this.following_obj = response
          this.following_id = this.following_obj.id
          this.isFollowing = true
        }else {
          this.isFollowing = false
      }
    })
    }
  }

  followUser(){
    if (this.authService.isAuthenticated == true){
    this.doodlrApiService.postFollow(this.user.url).subscribe()
    } else {
      this.router.navigateByUrl("/login")
    }
  }

  unfollowUser(){
    this.doodlrApiService.deleteFollow(this.following_id).subscribe()
  }

  userFollowing(){
    this.doodlrApiService.getFollowing(this.id).subscribe((response) => {
      this.following = response;
      this.followersLength = this.followers.length;
    })
  }

  userFollowers(){
    this.doodlrApiService.getFollowers(this.id).subscribe((response) => {
      this.followers = response;
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

  isUserCheck(id){
    let token=this.authService.grabCookie('uid')
    if (token == id){
      this.isUser = true
    }
    else {
      this.isUser = false
    }
  }

}
