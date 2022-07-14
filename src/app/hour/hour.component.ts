import { HourService } from './../hour.service';
import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

interface Food {
  value: string,
  viewValue: string
}

const MY_DATE_FORMAT = {
  parse: {
    dateInput: `YYYY/MM/DD`, // this is how your date will be parsed from Input
  },
  display: {
    dateInput: `YYYY/MM/DD`, // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css'],
  providers: [HourService,{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' }]
})


export class HourComponent implements OnInit {
  title1:string = "查詢條件";
  title2:string = "查詢結果";
  title3:string = "總計";
  selectTitle1:string = "交易日期";
  selectTitle2:string = "交易類別";
  selectTitle3:string = "操作行";
  selectTitle4:string = "總行代號";
  selectTitle5:string = "清算階段";
  currentPage:number = 1;
  perPage:number = 10;
  totalPage!:number;
  category:string[] = ['全部','類別1','類別2','類別3','類別4','類別5'];
  bank:string[] = ['全部','銀行1','銀行2','銀行3','銀行4','銀行5'];
  bankNumber:string[] = ['全部','123','456','789','102','333'];
  level:string[] = ['全部','1','2'];
  displayedColumns:string[] = ['hour','counts','successCounts','errorCounts','delayCounts','perTime','perInTime','perOutTime','changePerTime'];
  displayedColumns2:string[] = ['allCounts','counts','successCounts','errorCounts','delayCounts']
  dataSource:any;
  filterDataSource:any;
  dataSource2:any = [{"allCounts": 0,"counts": 0,"successCounts": 0,"errorCounts": 0,"delayCounts": 0}];
  exportTest = [['111','222','444'],['555','555','555'],[6666,44444,33333]]

  constructor(private service:HourService) {
  }

  ngOnInit(): void {
    this.service.get().subscribe(data => {
      console.log(data);
      this.dataSource = data;
      this.filterDataSource = this.dataSource.slice(0,10);
      this.totalPage = Math.ceil(this.dataSource.length / this.perPage);
      console.log('totalPage',this.totalPage);
      console.log('filterDataSource',this.filterDataSource);
    })
  }

    // 匯出
    daochu(){
      /* generate worksheet */
      const exportTitle = [this.dataSource[0]].map((data:any) =>{
        return Object.keys(data);
      })
      const exportContent = this.dataSource.map((data:any) => {
        return Object.values(data);
      })
      const exportFile = [...exportTitle,...exportContent]

      const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(exportFile);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      XLSX.writeFile(wb, 'SheetJS.xlsx');
    }

    changeNextPage(){
      if(this.currentPage >= this.totalPage) return;

      const nextPage = this.currentPage+1;
      this.filterDataSource = this.dataSource.slice(this.currentPage*this.perPage,nextPage*this.perPage);
      console.log(this.currentPage*this.perPage);
      console.log(nextPage*this.perPage);
      this.currentPage ++ ;
    }

    changePrevPage(){
      console.log('console.log(this.currentPage)',this.currentPage);
      if(this.currentPage <= 1) return;
      this.currentPage -- ;
      const prevPage = this.currentPage-1;
      this.filterDataSource = this.dataSource.slice(prevPage*this.perPage,this.currentPage*this.perPage);
      console.log(prevPage*this.perPage);
      console.log(this.currentPage*this.perPage);

    }

}
