import { Component, OnInit, HostListener, Input } from '@angular/core';
import { TimelineMax, Elastic, Back, TweenLite, Power1 } from 'gsap';
import { gsapAnimationsService } from '../gsap-animations/gsap-animations.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  open_nav: boolean = true
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(scrollY<102){
      this.scrollNav= false
    }
    if(scrollY>102){
      this.scrollNav=true
    }
  }
  scrollNav: boolean= false;
  @Input() aColor: string;

  constructor(private gsap: gsapAnimationsService) { }

  ngOnInit() {
    console.log(this.aColor);
    this.gsap.timelineDef();
  }
  openCloseNav(){
    this.gsap.openCloseNav()
  }
}