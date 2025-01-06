import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doodle-edit-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doodle-edit-page.component.html',
  styleUrl: './doodle-edit-page.component.css'
})
export class DoodleEditPageComponent {
  id: string;
  doodle: any;
  cookie: string;

  constructor(private doodlrApiService: DoodlrApiService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router
              ){}

    ngOnInit(){
      this.route.params.subscribe(params => {
        this.id = params['doodleid'];
        this.doodlrApiService.getDoodle(this.id).subscribe((response) => {
          this.doodle = response;
          this.doodle.doodlr == this.authService.grabCookie("uid") ? this.authService.canEditPost = true : this.authService.canEditPost = false
        })
      })
    }

    


}
