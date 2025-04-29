import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { DoodleTransferService } from '../../services/doodle-transfer.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-doodle-form',
  standalone: true,
  imports: [],
  templateUrl: './doodle-form.component.html',
  styleUrl: './doodle-form.component.css'
})
export class DoodleFormComponent {

  constructor (private doodlerApiService: DoodlrApiService, private router: Router, public doodleTransferService: DoodleTransferService ){}
  doodlForm = new FormData();
  reader = new FileReader ();
  doodle: File;

  ngOnInit(){
    this.loadFileFromService();
  }

  private navigateToCreated(id: string){
    this.router.navigateByUrl(`/doodle/${id}`)
  }

  private 

  private loadFileFromService(){
    if (this.doodleTransferService.doodleForForm != null){
      this.doodle = this.doodleTransferService.doodleForForm
      let url = URL.createObjectURL(this.doodle)
      const img = document.getElementById("doodle") as HTMLImageElement
      img.src = url
    }
  }


}
