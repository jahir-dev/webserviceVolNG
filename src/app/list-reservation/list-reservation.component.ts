import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/Reservation';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
  reservations : Reservation[]
  constructor(public reservationservice: ReservationService) { }

  ngOnInit() {
    this.getReservations();
  }


  getReservations() {
    this.reservationservice.getReservations().subscribe(
      res =>{
          this.reservations = res;
          console.log('reservation trouvé');
      }, err => {
        console.log('il y\'a une erreur : ' + err);
      });
  }

  deleteReservation(id) {
    this.reservationservice.deleteReservation(id)
      .subscribe(res => {
        // this.reservations = this.reservations.filter(obj => obj.id !== id);
        this.getReservations();
      }, err => {
        console.log(err);
      });
  }

}
