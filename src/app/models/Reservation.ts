export class Reservation {
    
    constructor( 
    public id_vol : number,
    public id_client : number,
    public date_reservation : Date,
    public nb_place : number,
){ }
}