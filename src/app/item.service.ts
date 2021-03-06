import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable,of } from 'rxjs';

@Injectable()

export class ItemService {
randaom = Math.random();
details = [
  { date: '2022,06,26',  detail: '手續費',  money: -15 },
  { date: '2022,06,24',  detail: '手續費',  money: -15 },
  { date: '2022,06,19',  detail: '手續費',  money: -15 },
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

accounts = {
  taiwan:
    {title: '臺幣帳戶',
     content: [
      {account: '臺幣帳戶',money: 24055,img: 'card.png'},
      {account: '1234-5678-9101-1213',money: 44055,img: 'card1.png'},
      {account: '1234-5678-9101-1214',money: 7055, img: 'card2.png'},
      {account: '1234-5678-9101-1215',money: 8055, img: 'card3.png'},
      {account: '1234-5678-9101-1216',money: 1085, img: 'card4.png'},
      {account: '1234-5678-9101-1217',money: 5078, img: 'card5.png'},
      {account: '1234-5678-9101-1218',money: 24999,img: 'card6.png'},
      {account: '1234-5678-9101-1219',money: 2743, img: 'card7.png'},
      {account: '1234-5678-9101-1210',money: 4055, img: 'card8.png'},
      {account: '1234-5678-9101-1211',money: 24055, img: 'card9.png'},
      {account: '1234-5678-9101-1212',money: 24055, img: 'card10.png'},
      {account: '1234-5678-9101-1220',money: 24055, img: 'card11.png'},
      {account: '1234-5678-9101-1221',money: 24055, img: 'card12.png'},
      {account: '1234-5678-9101-1222',money: 24055, img: 'card13.png'},
      {account: '1234-5678-9101-1223',money: 24055, img: 'card14.png'},
      {account: '1234-5678-9101-1224',money: 24055, img: 'card15.png'},
    ]
   },
   foreign:
    {title: '外幣帳戶',
    content: [
      {account: '外幣帳戶',money: 69055},
      {account: '6234-5678-9101-1224',money: 69055},
     ]
    },
    digital:
    {title: '數位帳戶',
    content: [
      {account: '數位帳戶',money: 746887},
      {account: '8834-5678-9101-1224',money: 746887},
     ]
    }
  };

handleError(error: HttpErrorResponse | any) {
  console.log('handleError');
  console.log(error);
  return throwError(error);
}

  constructor(private http:HttpClient ) { }

  get<T>(path: string) {
    return this.http.get<T>(path).pipe(
      retry(3),
      timeout(60000),
      catchError(this.handleError)
    )
  }

  getAllData() {
    return of(this.details);
  }

  getFilterData(days: any){
    const today = new Date();
    const filterDate = new Date(today.setDate(today.getDate() - Number(days)));
    const filterDataList = this.details.filter((data)=>{ return new Date(data.date) > filterDate})
    return of(filterDataList)
  }

  getAccountsData(){
    return of(this.accounts);
  }
}
