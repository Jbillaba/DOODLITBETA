import { Component  } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-doodlr-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './doodlr-profile.component.html',
  styleUrl: './doodlr-profile.component.css'
})
export class DoodlrProfileComponent{
  constructor(private doodlrApiService: DoodlrApiService,
              private authService: AuthService,
              private router: Router) {}
  user: any;
  doodles: any;
  pinned_doodle: any;
  doodlesLength;
  followers: any;
  followersLength;
  following: any;
  followingLength;
  Type: string = "NULL"

  ngOnInit(){
    this.getUser()
    this.getDoodles()
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

  public bookmarkDoodle(doodlID: string){
    if (this.authService.isAuthenticated == true) {
     return this.doodlrApiService.bookmarkDoodle(doodlID).subscribe()
    }
    else {
      return this.router.navigateByUrl("/login");
    }
  }

  public postYeah(doodlURL: string){
    if (this.authService.isAuthenticated == true) {
      return this.doodlrApiService.postyeahs(doodlURL, this.Type).subscribe()
    }
    else {
      return this.router.navigateByUrl('/login');
    }
  }

}
