import { Time } from '@angular/common';

export class Vol {
    constructor( 
    public ville_depart : string,
    public ville_arrivee : string,
    public prix : number,
    public duree : number,
    public nb_place : number,
    public nb_place_reservee : number,
    public etat : string,
    public date_depart? : Date,
    public date_arrivee? : Date,
    public heur_depart? : Time,
    public heur_arrivee? : Time,
){ }
}