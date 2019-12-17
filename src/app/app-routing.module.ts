import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KliceComponent } from './klice/klice.component';
import { MicroComponent } from './micro/micro.component';
import { SpeltaComponent } from './spelta/spelta.component';


const appRoutes: Routes = [
  { path: '', component:  MainComponent},
  // { path: '**', component: MainComponent },
  { path: 'klice', component: KliceComponent },
  { path: 'microgreens', component: MicroComponent },
  { path: 'sok-od-spelte', component: SpeltaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
