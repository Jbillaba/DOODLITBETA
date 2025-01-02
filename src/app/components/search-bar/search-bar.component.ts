import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoodlrApiService } from '../../services/doodlr-api.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  results: any;
  modalAppears: boolean = false;
  constructor(private doodlrApiService: DoodlrApiService){}


  ngAfterViewInit(){
    this.grabQuery()
  }

  grabQuery(){
    const searchBar = document.querySelector(".searchbar") as HTMLInputElement
    searchBar.addEventListener("input", () => {
      if (searchBar.value.length < 1){
        return
      }
      else{
        this.doodlrApiService.search(searchBar.value).subscribe( response => response = this.results )
      }
    })
  }


}
