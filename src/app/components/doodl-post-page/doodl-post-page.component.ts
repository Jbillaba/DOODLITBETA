import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-doodl-post-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './doodl-post-page.component.html',
  styleUrl: './doodl-post-page.component.css'
})
export class DoodlPostPageComponent {
  id: string;
  doodl: any;
  comments: any;
  comment: string;
  Type: string = "NULL"

  commentForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
  })

    constructor(private doodlrApiService:DoodlrApiService,
                private route: ActivatedRoute,
                public authService: AuthService,
                private router: Router
  ){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['doodleid'];
      this.doodlrApiService.getDoodle(this.id).subscribe(response => this.doodl = response)
      this.doodlrApiService.getDoodleComments(this.id).subscribe(response => this.comments = response)
    })
  }

  submitComment(){
    this.doodlrApiService.postComment(this.commentForm.value.text!, this.doodl.url).subscribe()
    window.location.reload();
  }

  postYeah(doodlURL: string,){
    if (this.authService.isAuthenticated == true) {
      return this.doodlrApiService.postyeahs(doodlURL, this.Type).subscribe()
    }
    else {
      return this.router.navigateByUrl('/login');
    }
  }



}
