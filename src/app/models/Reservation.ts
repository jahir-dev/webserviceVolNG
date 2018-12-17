import { Client } from './Client';
import { Vol } from './Vol';

export class Reservation {
    
    constructor( 
    public vol : Vol,
    public client : Client,
    public dateReservation : Date,

    public id?:number,
){ }
}