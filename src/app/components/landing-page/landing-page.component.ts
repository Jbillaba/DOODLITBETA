import { Component, OnInit } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


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
  constructor(private doodlrApiService: DoodlrApiService,){}
  ngOnInit(): void {
      this.doodlrApiService.getDoodles().subscribe(response => {this.doodles = response})

  }

  postYeah(doodlURL: string,){
    return this.doodlrApiService.postyeahs(doodlURL, this.Type).subscribe()
  }

}
