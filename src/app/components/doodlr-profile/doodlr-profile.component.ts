import { Component  } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doodlr-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doodlr-profile.component.html',
  styleUrl: './doodlr-profile.component.css'
})
export class DoodlrProfileComponent{
  constructor(private doodlerApiService: DoodlrApiService) {}
  user: any;

  ngOnInit(){
    return this.doodlerApiService.getCurrentUser().subscribe(response => {this.user = response})
  }

  logData(){
    console.log(this.user)
  }


}
