import { ItemService } from './../item.service';
import { ForeignCurrencyService } from './../foreign-currency.service';
import { Component, ElementRef, OnInit, ViewChild, OnChanges, SimpleChanges, ViewChildren, QueryList } from '@angular/core';
import { Count,CountInstance } from '../count';
import { filter } from 'rxjs';
import { CountSelectComponent } from '../count-select/count-select.component';

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
  optionArrTaiwan = [];
  optionArrForiegn = [];
  optionArrDigital = [];
  // @ViewChild(CountSelectComponent) CountSel  ectComponent!:CountSelectComponent;
  @ViewChildren(CountSelectComponent) public component!:QueryList<CountSelectComponent>;

  constructor(
    private foreignCurrencyService:ForeignCurrencyService,
    private itemService:ItemService
  ) {

  }

  ngOnInit(): void {
    this.getAccountsData();
    this.optionArrTaiwan = this.accounts.taiwan.content.map((el: { account: string; }) => el.account);
    this.optionArrForiegn = this.accounts.foreign.content.map((el: { account: string; }) => el.account);
    this.optionArrDigital = this.accounts.digital.content.map((el: { account: string; }) => el.account);
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
  changeCount(account:any,$event:any,index:number) {
    type ObjectKey = keyof typeof this.accounts;
    let accountKey = account as ObjectKey;

    const accountSelected = this.component.toArray()[index].select?.nativeElement.selectedIndex;
    this.account = this.accounts[accountKey].content[accountSelected].money;
    this.accountImg = this.accounts.taiwan.content[accountSelected].img;
    this.accountCategory = this.accounts[accountKey].title;
  }

  //點選外幣選項，抓取API
  getApi(){
    this.foreignCurrencyService.getData().subscribe((data: any) =>
      {
        // this.data = data;
        // this.status = this.data.responseMessage;
        // this.count += 1;
        console.log(data);
        // if(data === "error"){
        //   this.status = "嘗試重新讀取資料";
        // }
      }
  )}


}
