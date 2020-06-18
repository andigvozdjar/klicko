import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-klice',
  templateUrl: './klice.component.html',
  styleUrls: ['./klice.component.scss']
})
export class KliceComponent implements OnInit {

  constructor(public generalService: GeneralService) { }

  ngOnInit() {
    // window.scroll(0,0);
  }

}
