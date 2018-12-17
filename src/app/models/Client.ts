import { Time } from '@angular/common';

export class Client {
    
    constructor( 
    public cin : Date,
    public nom : Date,
    public prenom : Time,
    public sexe : Time,
    public date_naissance : string,
    public ville_arrivee : string,
    public telephone : number,
    public mail : number,
    public login : number,
    public password : number,
){ }
}