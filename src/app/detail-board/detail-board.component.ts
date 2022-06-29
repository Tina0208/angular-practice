import { Observable, reduce } from 'rxjs';
import { ItemService } from './../item.service';
import { Component, DoCheck, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-detail-board',
  templateUrl: './detail-board.component.html',
  styleUrls: ['./detail-board.component.css']
})
export class DetailBoardComponent implements OnInit {
  itemList :{ date: string; detail: string; money: number; }[] = []; //帳戶明細
  chartTitles = {title1: "轉入金額",title2: '轉出金額', title3: '利息' }; //帳戶明細標題
  chartColors = {color1: '#9197F2', color2: '#FEC133', color3: '#8EFB99'}; //圖表div背景色
  days:string = '14'; //天數
  transform:boolean = false; //按鈕切換css控制

  //取得全部資料
  getAllData(){
    this.itemService.getAllData().subscribe(items =>
      this.itemList = items)
  }

  //取得14天或30天資料
  filterData($event: any){
    console.log($event.currentTarget);
    const days = ($event.currentTarget.childNodes)[1].innerHTML;
    this.days = days;
    this.itemService.getFilterData(days).subscribe(items =>
      this.itemList = items);

    if(days === '30'){
      this.transform = true;
    }else {
      this.transform = false;
    }
  }

  constructor(private itemService: ItemService) {
  }

//   ngDoCheck(): void {
//     console.log('docheck123');
// }

  ngOnInit(): void {
    this.getAllData();
    // console.log('ngOnInit123');
  }
}
