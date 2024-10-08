import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doodl-post-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doodl-post-page.component.html',
  styleUrl: './doodl-post-page.component.css'
})
export class DoodlPostPageComponent {
  doodl: any;

  constructor(private doodlrApiService:DoodlrApiService,
              private route: ActivatedRoute,
  ){}

  ngOnInit(){
    const routeParamter = this.route.snapshot.paramMap;
    const doodlIdFromRoute = routeParamter.get("doodleid") as string;
    this.doodlrApiService.getDoodle(doodlIdFromRoute).subscribe(response => this.doodl = response)
  }
}
