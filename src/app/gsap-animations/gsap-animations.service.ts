import { Injectable } from '@angular/core';
import { TimelineMax, Back } from 'gsap';
import { Z_BLOCK } from 'zlib';


@Injectable({
    providedIn: 'root'
})
export class gsapAnimationsService {
    reverseTime: number = 1
    playTime: number = 1
    open_nav: boolean = true

    navbarTl = new TimelineMax({
        paused: true
    })
    constructor() { }
    playNav() {
        this.navbarTl.play().timeScale(this.playTime)
    }
    closeNav() {
        this.navbarTl.reverse()
    }

    openCloseNav(){
        if(this.open_nav){
            this.navbarTl.play().timeScale(this.playTime)
          this.open_nav = false;
        }else {
          this.navbarTl.reverse()
          this.open_nav = true;
        }
      }
    timelineDef() {
        this.navbarTl.to('.navigationCircle', .2, {
            height: '100vw',
            width: '100vw',
            rotate: 0
        });
        this.navbarTl.to('.closeNav', .01, {
            display: 'block',
            opacity: 0,
            height: '100%',
            width: '100%'
        }, "-=.2");
        this.navbarTl.to('.closeNav', .2, {
            opacity: 1,
        }, "-=.2");
        this.navbarTl.to('.hamburgerLine3', .4, {
            x: 50
        }, "-=.3");
        this.navbarTl.to('.hamburgerLine1', .3, {
            rotate: 45,
            y: 4,
            height: 3
        }, "-=.3");
        this.navbarTl.to('.hamburgerLine2', .3, {
            rotate: -45,
            y: -4,
            height: 3
        }, "-=.3");
    }
}
