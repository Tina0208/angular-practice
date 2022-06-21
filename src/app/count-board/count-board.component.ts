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
  countCategory:string = '臺幣';
  taiwanCounts = ['臺幣帳戶','1234-5678-9101-1213', '1234-5678-9101-1215']; //台幣帳戶項目
  @ViewChild('select') select!:ElementRef;
  cardShow = {card1: true,card2: false}; //帳戶卡片切換判斷
  show: boolean = false; //眼睛開關判斷
  noShow: boolean = true; //眼睛開關判斷
  count:string = "$24,055"; //帳戶總資產呈現
  counts:CountInstance = { //帳戶總資產資料
    臺幣: {
      '臺幣帳戶': "$24,055",
      'count1': "$12,500",
      'count2': "$11,555"
    },
    外幣: '$5,055',
    數位: '$79,055',
  };

  //帳戶切換method
  changeCount(count:any,$event:any) {
    this.countCategory = count;
    // 無法判斷count????
    // this.count = this.counts[count];
    switch(count){
      case '臺幣':
        const countSelected = this.select.nativeElement.value;
        switch(countSelected){
          case '臺幣帳戶':
            this.count = this.counts.臺幣.臺幣帳戶;
            break;
            case '1234-5678-9101-1213':
            this.count = this.counts.臺幣.count1;
            this.cardShow.card1 = true;
            this.cardShow.card2 = false;
            break;
            case '1234-5678-9101-1215':
            this.count = this.counts.臺幣.count2;
            this.cardShow.card1 = false;
            this.cardShow.card2 = true;
            break;
        }
        break;
      case '外幣':
        this.count = this.counts.外幣;
        this.select.nativeElement.value = '臺幣帳戶';
        break;
      case '數位':
        this.count = this.counts.數位;
        this.select.nativeElement.value = '臺幣帳戶';
        break;
      default:
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}