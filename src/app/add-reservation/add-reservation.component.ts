import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VolService } from '../services/vol.service';
import { ReservationService } from '../services/reservation.service';
import { Vol } from '../models/Vol';
import { Reservation } from '../models/Reservation';
import { Client } from '../models/Client';




@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  vol : Vol;
  reservation : Reservation;
  ReservationForm : FormGroup;

  constructor(public volservice: VolService, 
              public reservationservice : ReservationService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.ReservationForm = this.fb.group({
      'dateReservation': [null, Validators.required],
      'nom': ['jah', Validators.required],
      'prenom': ['nab', Validators.required],
      'dateNaissance': [null, Validators.required],
      'sexe': [ 'male',Validators.required],
      'cin': ['21523', Validators.required],
      'passeport': ['326532', Validators.required],
      'email': ['nab@gmail.com', Validators.required],
      'phone': ['25465421', Validators.required],
    });

    let id = +this.route.snapshot.paramMap.get('id');
    console.log(' the id is ' + id);
    this.getVol(id);
    
  }
getVol(id: number) {
    this.volservice.getVolById(id).subscribe(
      res =>{
          this.vol = res;
          console.log('Vol détails trouvé');
      }, err => {
        console.log('il y\'a une erreur : ' + err);
      });
  }

  onFormSubmit(form: NgForm) {
    //this.isLoadingResults = true;
    let f = form.value
    let client = new Client(f.cin,f.nom,f.prenom,f.passeport,f.sexe,f.dateNaissance,f.phone,f.email);
    let reservation = new Reservation(this.vol,client,f.dateReservation);
    console.log('reservation data = ' + reservation.dateReservation);
    console.log('la res = ' + JSON.stringify(reservation));
    // this.reservationservice.addReservation(reservation)
    //   .subscribe(res => {
    //     //this.router.navigate(['reservations/list']);
    //     console.log('add reservation done');
    //   }
    //   , (err) => {
    //     console.log('il ya une erreurrrrr ' +err);
    //   });
  }

}


