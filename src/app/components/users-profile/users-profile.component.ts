import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoodlrApiService } from '../../services/doodlr-api.service';

@Component({
  selector: 'app-users-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.css'
})
export class UsersProfileComponent {
  id: string;
  user: any;
  doodles: any;
  following: any;
  followers: any;
  constructor(private doodlrApiService: DoodlrApiService,
              private route: ActivatedRoute){}

  //to do: make a modal that displays the names of the following objects:
              //following
              //followers

  ngOnInit(){
    const routerParameter = this.route.snapshot.paramMap;
    this.id = routerParameter.get("id")
    this.doodlrApiService.getUser(this.id).subscribe(response => this.user = response)
    this.doodlrApiService.getUsersDoodles(this.id).subscribe(response => this.doodles = response)
  }

  followUser(){
    return this.doodlrApiService.postFollow(this.user.url).subscribe()
  }

  userFollowing(){
    this.doodlrApiService.getFollowing(this.id).subscribe(response => this.following = response)
    console.table(this.following)
  }

  userFollowers(){
    this.doodlrApiService.getFollowers(this.id).subscribe(response => this.followers = response)
    console.table(this.followers)
  }
}
