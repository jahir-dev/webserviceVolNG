import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Reservation } from '../models/Reservation';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:8090/";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }


  // Getting vol
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(apiUrl+"all",httpOptions)
      .pipe(
        tap( () => console.log('fetched reservations')),
        catchError(this.handleError('getReservation', []))
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
