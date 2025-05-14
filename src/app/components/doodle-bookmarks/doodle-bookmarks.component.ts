import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';

@Component({
  selector: 'app-doodle-bookmarks',
  standalone: true,
  imports: [],
  templateUrl: './doodle-bookmarks.component.html',
  styleUrl: './doodle-bookmarks.component.css'
})
export class DoodleBookmarksComponent {
constructor (private doodlrApiService: DoodlrApiService){}
bookmarks: any;

  ngOnInit(){
    this.grabDoodles()
    
  }

  grabDoodles(){
    this.doodlrApiService.currentUserBookmarks().subscribe((response) => {
      this.bookmarks = response;
      console.log(this.bookmarks)
    })
  }
}
