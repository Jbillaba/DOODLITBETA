import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  ngAfterViewInit(){
    console.log(this.grabQuery)
  }

  grabQuery(e: Event){
    const searchBar = e.currentTarget as HTMLInputElement
    const query = searchBar.value
    return query
  }


}
