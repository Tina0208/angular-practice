import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Count,CountInstance } from '../count';

@Component({
  selector: 'app-count-board',
  templateUrl: './count-board.component.html',
  styleUrls: ['./count-board.component.css']
})
export class CountBoardComponent implements OnInit {
  title1:string = '臺幣帳戶'; //傳給子元件的title
  title2:string = '外幣帳戶'; //傳給子元件的title
  title3:string = '數位帳戶'; //傳給子元件的title
  accountCategory:string = '臺幣';
  taiwanCounts = ['臺幣帳戶','1234-5678-9101-1213', '1234-5678-9101-1215']; //台幣帳戶項目
  @ViewChild('select') select!:ElementRef;
  cardShow = {card1: true,card2: false}; //帳戶卡片切換判斷
  show: boolean = false; //眼睛開關判斷
  noShow: boolean = true; //眼睛開關判斷
  account:string = "$24,055"; //帳戶總資產呈現
  prevAccountSelected:number=1;
  accounts:Count = { //帳戶總資產資料
    臺幣: ['$24,055','$12,500','$11,555'], //[臺幣帳總資產,account1資產,account2資產]
    外幣: '$5,055',
    數位: '$79,055',
  };
  accountColor = {account1: true,account2: false,account3: false};
  changeColor(account:any){
    this.accountColor = {account1: false,account2: false,account3: false};
    switch(account){
      case '臺幣':
        this.accountColor.account1 = true;
        break;
      case '外幣':
        this.accountColor.account2 = true;
        break;
      case '數位':
        this.accountColor.account3 = true;
        break;
    }
  }

  //帳戶切換method
  changeCount(account:any,$event:any) {
    type ObjectKey = keyof typeof this.accounts;
    let accountKey = account as ObjectKey;
    this.accountCategory = account;

    if(account === '臺幣'){
      const countSelected = this.select.nativeElement.value;
      this.account = this.accounts.臺幣[countSelected];
      if(countSelected === '1') {
        this.cardShow.card1 = true;
        this.cardShow.card2 = false;
      }else if(countSelected === '2'){
        this.cardShow.card1 = false;
        this.cardShow.card2 = true;
      }
    }else {
      this.account = this.accounts[accountKey];
    }

    //切換點選帳戶文字顏色
    this.changeColor(account);

    // switch(count){
    //   case '臺幣':
    //     const countSelected = this.select.nativeElement.value;
    //     switch(countSelected){
    //       case '臺幣帳戶':
    //         this.count = this.counts.臺幣.臺幣帳戶;
    //         break;
    //         case '1234-5678-9101-1213':
    //         this.count = this.counts.臺幣.count1;
    //         this.cardShow.card1 = true;
    //         this.cardShow.card2 = false;
    //         break;
    //         case '1234-5678-9101-1215':
    //         this.count = this.counts.臺幣.count2;
    //         this.cardShow.card1 = false;
    //         this.cardShow.card2 = true;
    //         break;
    //     }
    //     break;
    //   case '外幣':
    //     this.count = this.counts.外幣;
    //     this.select.nativeElement.value = '臺幣帳戶';
    //     break;
    //   case '數位':
    //     this.count = this.counts.數位;
    //     this.select.nativeElement.value = '臺幣帳戶';
    //     break;
    //   default:
    //     break;
    // }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
