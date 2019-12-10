import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webAngular';
  @HostListener("window:scroll", [])
  onWindowScroll() {
    // console.log(window.screenY, scrollY)
    // if(window.screenY<60){
    //   this.scrollNav= true
    //   console.log(this.scrollNav, window.screenY)
    // }
    // if(window.screenY>60){
    //   this.scrollNav=false
    //   console.log(this.scrollNav, window.screenY)
    // }
  }
  onActivate(event) {
    window.scroll(0,0);
}
}
