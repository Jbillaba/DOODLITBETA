import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  userAppears: boolean = false;
  passwordAppears: boolean = false;
  emailAppears: boolean = false;
  deleteAppears: boolean = false;
  constructor(private doodlrApiService: DoodlrApiService){}
  ngOnInit(){}
  
  ngAfterViewInit(){
    
  }

  open(){
    this.userAppears = true;
    this.userAppears = !this.userAppears;
  }

}
