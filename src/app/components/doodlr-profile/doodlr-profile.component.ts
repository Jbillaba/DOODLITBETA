import { Component  } from '@angular/core';
import { StorageService } from '../../services/storage.service';
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
  constructor(private doodlerApiService: DoodlrApiService,
              private storageService: StorageService) {}
  UsersDoodles: any;

  ngOnInit(){
    return this.doodlerApiService.getUsersDoodles().subscribe(response => this.UsersDoodles = response)
  }

}
