import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  get<T>(path: string) {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token')!);
    return this.http.get<T>(path, {headers: header})
      .pipe(
        retry(1),
        timeout(60000),
        catchError(this.handleError)
      );
  }

  post<T>(path: string,data: any) {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token')!);
    return this.http.post<T>(path, data, {headers: header})
      .pipe(
        retry(1),
        timeout(60000),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse | any) {
    console.log('handleError');
    console.log(error);
    return throwError(error);
  }

}
