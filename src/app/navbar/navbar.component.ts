import { Component, OnInit, HostListener, Input } from '@angular/core';
import { TimelineMax, Elastic, Back, TweenLite, Power1 } from 'gsap';
import { gsapAnimationsService } from '../gsap-animations/gsap-animations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(scrollY<102){
      this.scrollNav= false
    }
    if(scrollY>102){
      this.scrollNav=true
    }
  }

  innerWidth: number;
  open_nav: boolean = true
  scrollNav: boolean= false;
  @Input() aColor: string;

  constructor(private gsap: gsapAnimationsService, private router: Router) { }

  ngOnInit() {
    console.log(this.aColor);
    this.gsap.timelineDef();
  }
  navigate(route: string){
    window.scrollTo(0, 0);
    // ne znam za sta je innerHeight
    // window.scrollTo(0, window.innerHeight);
    this.router.navigateByUrl(route)
    this.openCloseNav();
  }
  openCloseNav(){
    this.gsap.openCloseNav(window.innerWidth)
  }
}