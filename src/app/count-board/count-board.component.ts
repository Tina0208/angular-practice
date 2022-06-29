import { ItemService } from './../item.service';
import { ForeignCurrencyService } from './../foreign-currency.service';
import { Component, ElementRef, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Count,CountInstance } from '../count';
import { filter } from 'rxjs';

@Component({
  selector: 'app-count-board',
  templateUrl: './count-board.component.html',
  styleUrls: ['./count-board.component.css'],
})

export class CountBoardComponent implements OnInit,OnChanges {

  accountCategory:string = '臺幣';
  show: boolean = false; //眼睛開關判斷
  noShow: boolean = true; //眼睛開關判斷
  account!:number; //帳戶總資產呈現
  accountImg:string = "card.png"; //帳戶卡片呈現
  accounts:any;
  status:string = "";
  count:number = 0;
  data:any;

  @ViewChild('select') select!:ElementRef;

  constructor(
    private foreignCurrencyService:ForeignCurrencyService,
    private itemService:ItemService
  ) { }

  ngOnInit(): void {
    this.getAccountsData();
  }

  ngOnChanges(): void {
    console.log('ngOnchange');

  }


  //取得帳戶資料
  getAccountsData(){
    this.itemService.getAccountsData().subscribe(data => {
        this.accounts = data;
    })
  }

  //帳戶切換method
  changeCount(account:any,$event:any) {
    type ObjectKey = keyof typeof this.accounts;
    let accountKey = account as ObjectKey;

    if(account === '臺幣'){
      console.log('select被點到')
      const accountSelected = this.select.nativeElement.value;
      this.account = this.accounts.taiwan.content[accountSelected].money;
      this.accountImg = this.accounts.taiwan.content[accountSelected].img;
      this.accountCategory = this.accounts.taiwan.title;
    }else {
      this.account = this.accounts[accountKey].content[0].money;
      this.accountCategory = this.accounts[accountKey].title;
    }
  }

  //點選外幣選項，抓取API
  getApi(){
    this.foreignCurrencyService.getData().subscribe(data =>
      {
        this.data = data;
        this.status = this.data.responseMessage;
        this.count += 1;
        console.log(this.count);
        if(data === "error"){
          this.status = "嘗試重新讀取資料";
        }
      }
  )}


}
