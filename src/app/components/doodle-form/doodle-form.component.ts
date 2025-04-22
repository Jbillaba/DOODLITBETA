import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';}
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


  public postDoodl(){
    this.doodlForm.append("image", this.doodl!, this.doodl.name!);
    this.doodlerApiService.postDoodle(this.doodlForm).subscribe((response)=>{
      this.createdDoodle = response;
      this.createdDoodle != undefined ? this.navigateToCreated(this.createdDoodle.id) : alert("please try posting again");
    })
    }
}
