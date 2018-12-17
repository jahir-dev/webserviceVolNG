import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVolComponent } from './list-vol/list-vol.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVolComponent,
    ListReservationComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
