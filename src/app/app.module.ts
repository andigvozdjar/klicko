import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { KliceComponent } from './klice/klice.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MicroComponent } from './micro/micro.component';
import { SpeltaComponent } from './spelta/spelta.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    KliceComponent,
    NavbarComponent,
    FooterComponent,
    MicroComponent,
    SpeltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
