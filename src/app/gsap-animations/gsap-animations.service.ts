import { Injectable } from '@angular/core';
import { TimelineMax, Back } from 'gsap';


@Injectable({
    providedIn: 'root'
})
export class gsapAnimationsService {
    reverseTime: number = 2
    playTime: number = 1
    open_nav: boolean = true
    innerWidth: number

    navbarTl = new TimelineMax({
        paused: true
    })
    constructor() { }
    playNav() {
        this.navbarTl.play().timeScale(this.playTime)
    }
    closeNav() {
        this.navbarTl.reverse().timeScale(this.reverseTime)
    }

    openCloseNav(w){
        this.innerWidth = w
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
            height: 'calc(100vh + 100px)',
            rotate: 0,
            width: () => {
                if (this.innerWidth > 582)
                  return  '45vw'
                if (this.innerWidth < 582)
                  return "65vw"
              }
        });
        this.navbarTl.to('.closeNav', .01, {
            display: 'block',
            opacity: 0,
            height: '100%',
            width: '100%'
        }, "-=.2");
        this.navbarTl.to('.closeNav', .1, {
            opacity: 1,
        }, "-=.2");
        this.navbarTl.to('.hamburgerLine3', .4, {
            x: 50,
            opacity: 0
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
        this.navbarTl.from('.navigationCircle', .3, {
            borderRadius: '50% 0 50% 50%'
       }, "-=.3");
        this.navbarTl.to('.navigationCircle', .2, {
            borderRadius: '0 0 0 0'
       });
       this.navbarTl.fromTo('.mobile-nav-ul', .2, { 
           x: -20,
           opacity: 0
       },{
           x:0,
           opacity: 1
       }, "-=.15");
       

    //    tl.fromTo(element, 1, {left:0}, {left:-100})  
        // this.navbarTl.staggerFromTo(['.nav1,.nav2,.nav3,.nav4,.nav5,.nav6'], .1, {
        //     x: -20,
        //     opacity: 0
        // }, {
        //     x: 0,
        //     opacity: 1
        // }, 0.1, 0);
    }
}
