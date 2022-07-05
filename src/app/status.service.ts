import { retry, timeout, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()

export class StatusService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get('../assets/status.json').pipe(
      retry(3),
      timeout(60000),
      catchError(this.handlerError)
    )
  }

  handlerError(error: HttpErrorResponse | any){
    return throwError(error);
  }
}
