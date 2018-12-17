import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Reservation } from '../models/Reservation';
import { Client } from '../models/Client';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }


  // Getting vol
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(apiUrl+"reservations",httpOptions)
      .pipe(
        tap( () => console.log('fetched reservations')),
        catchError(this.handleError('getReservation', []))
      );
  }

  //add Reservation
  addReservation(reservation): Observable<Reservation> {
    return this.http.post<Reservation>(apiUrl+"reservation/add", Reservation, httpOptions).pipe(
      catchError(this.handleError<Reservation>('add reservation in service'))
    );
  }

  //delete Reservation
  deleteReservation (id): Observable<Reservation> {
    const url = `${apiUrl+"delete"}/${id}`;
    return this.http.delete<Reservation>(apiUrl+"reservation/delete/" + id, httpOptions).pipe(
      tap(_ => console.log(`deleted reservation id =${id}`)),
      catchError(this.handleError<Reservation>('delete reservation'))
    );
  }
    // Handling errors 
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
          return of(result as T);
      };
    }

}
