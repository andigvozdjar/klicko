import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-klice-detail',
  templateUrl: './klice-detail.component.html',
  styleUrls: ['./klice-detail.component.scss']
})
export class KliceDetailComponent implements OnInit {
  vrsta: string ; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.vrsta = params['vrsta'];
          console.log(this.vrsta)
          // this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

}
