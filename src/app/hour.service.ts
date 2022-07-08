import { catchError ,retry,timeout } from 'rxjs/operators';
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable( )

export class HourService {

  constructor(private http:HttpClient) {

   }

   get(){
    return this.http.get('./../assets/hour.json').pipe(
      retry(3),
      timeout(60000),
      catchError(this.errorHandler)
    )
   }

   errorHandler(error: HttpErrorResponse | any){
    return throwError(error);
  }
}
