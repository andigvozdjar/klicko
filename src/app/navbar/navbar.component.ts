import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  scrollNav: boolean= false;
  @Input() aColor: string 

  constructor() { }

  ngOnInit() {
    console.log(this.aColor)
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(scrollY<102){
      this.scrollNav= false
    }
    if(scrollY>102){
      this.scrollNav=true
    }
  }

}
