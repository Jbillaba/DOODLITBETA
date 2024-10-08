import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoodlrApiService } from '../../services/doodlr-api.service';

@Component({
  selector: 'app-imageupload',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './imageupload.component.html',
  styleUrl: './imageupload.component.css'
})
export class ImageuploadComponent {
  filereader = new FileReader()
  constructor(private doodlrApiService: DoodlrApiService){}

  uploadForm = new FormData();
  
  onImagePicked(e: Event){
    const element = e.currentTarget as HTMLInputElement;
    const file = element.files!.item(0);
    this.uploadForm.append("image", file!, file!.name)
  }

  onSubmit(e:Event){
    e.preventDefault()
    this.doodlrApiService.postDoodle(this.uploadForm).subscribe()
  }

}
