import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoodleTransferService {

  constructor() { }

  doodleForForm: File = null
}
