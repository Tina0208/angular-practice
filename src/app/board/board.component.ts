import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  observable = this.itemService.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/106');
  response: any;
  dataList: any;
  dataOfBanchiao!: any;
  dataOfBanchiaoFilter(data:any){
    this.dataOfBanchiao = data.filter((el: { site_id: string; }) => {
      return el.site_id === '新北市板橋區';
    })
  };
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    console.log(this.observable);

    this.observable.subscribe(x => {
      console.log(x);
      this.response = x;
      this.dataList = this.response.responseData;
      console.log(this.dataList);
      this.dataOfBanchiaoFilter(this.dataList);
      console.log(this.dataOfBanchiao);
    })

}}
