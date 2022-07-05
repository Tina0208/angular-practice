import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [StatusService]
})
export class StatusComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['rowspan1','rowspan2',  'name', 'weight',  'name2', 'weight2',  'name3', 'weight3','rowspan3','rowspan4','rowspan5','rowspan6','rowspan7'];
  dataSource:any = [];
  // @ViewChild('status') status!:ElementRef;
  @ViewChildren('status') status!:QueryList<ElementRef>;

  constructor(private service:StatusService) {

   }

  ngOnInit(): void {
    this.service.get().subscribe(data =>{
        // console.log(data);
        this.dataSource = data;
        // console.log(this.dataSource)
      });
  }

  ngAfterViewInit():void {
    console.log('status',this.status);
    // console.log('status',this.status.changes.subscribe);
    // this.status.map(e => {
    //   console.log(e);
    // })
    this.status.forEach(el => console.log(el))
    console.log(this.status.toArray())
    this.status.changes.subscribe(c => { c.toArray().forEach((item: any) => {
      if(item.nativeElement.innerText !== "訊息通知"){
        console.log('111',item.nativeElement.__ngContext__[0].style.backgroundColor = "red");
      }
    }) });
  }

}
