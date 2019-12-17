import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  @Input('type') type: string;

  constructor() { }

  ngOnInit() {
  }

}
