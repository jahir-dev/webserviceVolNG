import { Component, OnInit } from '@angular/core';
import { VolService } from '../services/vol.service';
import { Vol } from '../models/Vol';

@Component({
  selector: 'app-list-vol',
  templateUrl: './list-vol.component.html',
  styleUrls: ['./list-vol.component.css']
})
export class ListVolComponent implements OnInit {
  vols : Vol[];

  constructor(public volservice: VolService) { }

  ngOnInit() {
    this.getVols();
  }

  getVols() {
    this.volservice.getVols().subscribe(
      res =>{
          this.vols = res;
          console.log('vol trouvé');
      }, err => {
        console.log('il y\'a une erreur : ' + err);
      });
  }

  deleteVol(id) {
    console.log('dans delete ');
        this.volservice.deletevol(id)
          .subscribe(res => {
            this.vols = this.vols.filter(obj => obj.id !== id);
            this.getVols();
          }, err => {
            console.log(err);
          });
      }
}
