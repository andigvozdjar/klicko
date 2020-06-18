import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  scrollTo(){
    window.scroll(0, document.body.offsetHeight - 50);
  }
  
}
