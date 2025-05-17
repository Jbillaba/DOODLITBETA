import { Component } from '@angular/core';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doodle-bookmarks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './doodle-bookmarks.component.html',
  styleUrl: './doodle-bookmarks.component.css'
})
export class DoodleBookmarksComponent {
constructor (private doodlrApiService: DoodlrApiService){}
bookmarks: any;
bookmarksLength: number;
Type: string = "NULL"


  ngOnInit(){
    this.grabDoodles()
    
  }

  grabDoodles(){
    this.doodlrApiService.currentUserBookmarks().subscribe((response) => {
      this.bookmarks = response;
      this.bookmarksLength = this.bookmarks.length;
      console.log(this.bookmarks)
    })
  }

  public postYeah(doodlURL: string){
      return this.doodlrApiService.postyeahs(doodlURL, this.Type).subscribe()
    }

  public bookmarkDoodle(doodlID: string){
       return this.doodlrApiService.bookmarkDoodle(doodlID).subscribe()
      }
}
