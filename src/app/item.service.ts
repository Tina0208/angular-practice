import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable,of } from 'rxjs';

@Injectable()

export class ItemService {
randaom = Math.random();
details = [
  { date: '2022,06,19',  detail: '手續費',  money: -15 },
  { date: '2022,06,19',  detail: '委帶入',  money: 1500 },
  { date: '2022,06,17',  detail: '轉帳存',  money: 1500 },
  { date: '2022,06,12',  detail: '現金提',  money: -3000 },
  { date: '2022,06,10',  detail: '現金提',  money: -5000 },
  { date: '2022,06,10',  detail: '手續費',  money: -15 },
  { date: '2022,06,09',  detail: '現金提',  money: -1500 },
  { date: '2022,06,07',  detail: '轉帳存',  money: 55000 },
  { date: '2022,06,06',  detail: '手續費',  money: -15 },
  { date: '2022,06,03',  detail: '委帶入',  money: 20000 },
  { date: '2022,06,01',  detail: '申購扣',  money: -20000 },
  { date: '2022,05,31',  detail: '轉帳存',  money: 15000 },
  { date: '2022,05,26',  detail: '現金提',  money: -3000 },
  { date: '2022,05,17',  detail: '現金提',  money: -5000 },
  { date: '2022,05,16',  detail: '手續費',  money: -15 },
  { date: '2022,05,15',  detail: '手續費',  money: -15 },
  { date: '2022,05,10',  detail: '轉帳存',  money: 8000 },
  { date: '2022,05,10',  detail: '手續費',  money: -15 },
  { date: '2022,05,05',  detail: '現金提',  money: -1000 },
]

handleError(error: HttpErrorResponse | any) {
  console.log('handleError');
  console.log(error);
  return throwError(error);
}

  constructor(private http:HttpClient ) { }

  get<T>(path: string) {
    return this.http.get<T>(path).pipe(
      retry(1),
      timeout(60000),
      catchError(this.handleError)
    )
  }

  getAllData() {
    return of(this.details);
  }

  getFilterData(days: any){
    const today = new Date();
    console.log('service',days);

    const filterDate = new Date(today.setDate(today.getDate() - Number(days)));
    console.log('filterDate',filterDate);
    const filterDataList = this.details.filter((data)=>{ return new Date(data.date) > filterDate})
    return of(filterDataList)
  }
}
