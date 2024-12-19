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
  user: any;
  doodles: any;
  constructor(private doodlrApiService: DoodlrApiService,
              private route: ActivatedRoute){}

  ngOnInit(){
    const routerParameter = this.route.snapshot.paramMap;
    const username = routerParameter.get("username") as string;
    this.doodlrApiService.getUser(username).subscribe(response => this.user = response)
    this.doodlrApiService.getUsersDoodles(username).subscribe( response => this.doodles = response)
  }

  logDataForUser(){
  console.table(this.user);
  }

  logDataForDoodles(){
  console.table(this.doodles);
  }

}
