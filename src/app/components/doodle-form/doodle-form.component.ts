import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-doodle-form',
  standalone: true,
  imports: [],
  templateUrl: './doodle-form.component.html',
  styleUrl: './doodle-form.component.css'
})
export class DoodleFormComponent {

  doodlForm = new FormData();
  doodl =  File; 
  private createdDoodle: any;

  constructor (private doodlerApiService: DoodlrApiService, private router: Router ){}

  private navigateToCreated(id: string){
    this.router.navigateByUrl(`/doodle/${id}`)
  }


}
