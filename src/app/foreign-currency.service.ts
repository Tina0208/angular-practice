import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForeignCurrencyService {
  ap1:string ="https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/106";
  constructor(private http:HttpClient) { }

  getData<T>(){
    return this.http.get("https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/106").pipe(
      retry(3),
      timeout(60000),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse | any) {
    console.log('handleError');
    console.log(error);
    return of('error');
  }

}
