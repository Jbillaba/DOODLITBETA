import { Component, } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DoodlrApiService } from '../../services/doodlr-api.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  doodlr: any;
  constructor (public storageService: StorageService, public doodlrApiService: DoodlrApiService) {}

}
