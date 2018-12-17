import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVolComponent } from './list-vol/list-vol.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';

const routes: Routes = [
  {
    path:'vols/list',
    component: ListVolComponent,
  },
  {
    path:'reservations/list',
    component: ListReservationComponent
  },
  {
    path:'vols/reserver',
    component:AddReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
