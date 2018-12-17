import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Vol } from '../models/Vol';
import { VOLS } from '../models/mock-vols';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class VolService {

  constructor(private http: HttpClient) { }


  // Getting vol
  getVols(): Observable<Vol[]> {
    return this.http.get<Vol[]>(apiUrl+"vols",httpOptions)
      .pipe(
        tap( () => console.log('fetched vols')),
        catchError(this.handleError('getVols', []))
      ); 
      //return of(VOLS);
  }


    //delete vol
    deletevol (id): Observable<Vol> {
      const url = `${apiUrl+"delete"}/${id}`;
      return this.http.delete<Vol>(apiUrl+"vol/delete/" + id, httpOptions).pipe(
        tap(_ => console.log(`deleted vol id =${id}`)),
        catchError(this.handleError<Vol>('delete Vol'))
      );
    }

  // Getting vol
  getVolById(id:number): Observable<Vol> {
    return this.http.get<Vol>(apiUrl+"vol/" + id ,httpOptions)
      .pipe(
        tap( () => console.log('fetched vols')),
        catchError(this.handleError<Vol>('getVols'))
      ); 
      //return of(VOLS);
  }

  
    // Handling errors 
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
          return of(result as T);
      };
    }


}
