import { Observable, reduce } from 'rxjs';
import { ItemService } from './../item.service';
import { Component, DoCheck, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-detail-board',
  templateUrl: './detail-board.component.html',
  styleUrls: ['./detail-board.component.css']
})
export class DetailBoardComponent implements OnInit,DoCheck {
  itemList :{ date: string; detail: string; money: number; }[] = [];
  chartTitles = {title1: "轉入金額",title2: '轉出金額', title3: '利息' };
  chartColors = {color1: '#9197F2', color2: '#FEC133', color3: '#8EFB99'};
  days:string = '14';
  transform:boolean = false;


  getAllData(){
    this.itemService.getAllData().subscribe(items =>
      this.itemList = items)
  }

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
    console.log(this.itemList);
  }

  ngDoCheck(): void {
    console.log('docheck123');
}

  ngOnInit(): void {
    this.getAllData();
    console.log('ngOnInit123');
  }
}
