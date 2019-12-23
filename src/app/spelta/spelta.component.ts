import { Component, OnInit } from '@angular/core';
import { TweenLite } from 'gsap';


@Component({
  selector: 'app-spelta',
  templateUrl: './spelta.component.html',
  styleUrls: ['./spelta.component.scss']
})
export class SpeltaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // parralax(x?, y?) {
  //   TweenLite.to('#veci', 1, {
  //     x: -x * 10,
  //     y: -y * 10,
  //     opacity: Math.abs(x) * 0.5,
  //     ease: Power1.easeOut
  //   })
  //   TweenLite.to('#manji', 1, {
  //     x: x * 10,
  //     y: y * 10,
  //     opacity: Math.abs(y) * 0.4,
  //     ease: Power1.easeOut
  //   })
  //   TweenLite.to('#manjii', 1, {
  //     rotation: x * 10,
  //     opacity: Math.abs(y) * 0.5,
  //     ease: Power1.easeOut
  //   })
  //   TweenLite.to('#vecii', 1, {
  //     rotation: y * 10,
  //     opacity: Math.abs(x) * 0.4,
  //     ease: Power1.easeOut
  //   })
  //   TweenLite.to('.all', 3, {
  //     rotationY: x * 30,
  //     rotationX: y * 30,
  //     rotationZ: x * y * 20
  //   })
  //   TweenLite.to('.expandText li', 1, {
  //     rotationY: x * 70,
  //     rotationX: y * 70
  //   })
  //   TweenLite.to('.social img', 1, {
  //     x: y * 30
  //   })
  // }
}
