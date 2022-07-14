import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
  providers: [StatusService]
})
export class StateComponent implements OnInit {
  secound = 60;
  displayedColumns: string[] = ['rowspan1','rowspan2',  'name', 'weight',  'name2', 'weight2',  'name3', 'weight3','rowspan3','rowspan4','rowspan5','rowspan6','rowspan7'];
  dataSource:any = [];
  @ViewChildren('status') status!:QueryList<ElementRef>;

  constructor(private service:StatusService) {
        this.countdown();
   }

  ngOnInit(): void {
    this.service.get().subscribe(data =>{
        this.dataSource = data;
      });
  }

  ngAfterViewInit():void {
    this.status.changes.subscribe(c => { c.toArray().forEach((item: any) => {
      if(item.nativeElement.innerText !== "訊息通知"){
        item.nativeElement.__ngContext__[0].style.backgroundColor = "red";
      }
    }) });
  }


  countdown(){
    setTimeout(()=>{
      this.secound --;
      this.countdown();
      if(this.secound === 0){
        location.reload();
      }
    },1000);
  }

  reload(){
    location.reload();
  }

}
