import { Component, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { DoodlrApiService } from '../../services/doodlr-api.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  results:any;
  modalAppears: boolean = false;
  constructor(private doodlrApiService: DoodlrApiService){}

  ngAfterViewInit(){
    this.grabQuery()
  }

  grabQuery(){
    const searchBar = document.querySelector(".searchbar") as HTMLInputElement
    searchBar.addEventListener("input", () => {
      if (searchBar.value.length < 1){
        this.modalAppears = false;
        return this.results = null
      }
      else{
         this.modalAppears = true;
         this.doodlrApiService.search(searchBar.value).subscribe(response => this.results = response)
      }
    })
  }


}
