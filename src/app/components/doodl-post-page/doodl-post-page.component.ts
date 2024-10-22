import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-doodl-post-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './doodl-post-page.component.html',
  styleUrl: './doodl-post-page.component.css'
})
export class DoodlPostPageComponent {
  doodl: any;
  comments: any;
  comment: string;
  commentForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
  })

    constructor(private doodlrApiService:DoodlrApiService,
              private route: ActivatedRoute,
  ){}

  ngOnInit(){
    const routeParamter = this.route.snapshot.paramMap;
    const doodlIdFromRoute = routeParamter.get("doodleid") as string;
    this.doodlrApiService.getDoodle(doodlIdFromRoute).subscribe(response => this.doodl = response)
    this.doodlrApiService.getDoodleComments(doodlIdFromRoute).subscribe(response => this.comments = response)
  }

  submitComment(){
    this.doodlrApiService.postComment(this.commentForm.value.text!, this.doodl.url).subscribe()
  }

  

}
