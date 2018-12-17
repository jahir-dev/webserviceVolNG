import { Time } from '@angular/common';

export class Client {
    
    constructor( 
    public cin : Date,
    public nom : Date,
    public prenom : Time,
    public num_passeport : String,
    public sexe : Time,
    public date_naissance : string,
    public telephone : String,
    public mail : String,
){ }
}