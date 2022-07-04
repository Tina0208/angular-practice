import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns: string[] = ['position','position2',  'name', 'weight',  'name2', 'weight2',  'name3', 'weight3','position3','position4','position5','position6','position7'];
  dataSource = [
    {username: 'Tina',age: 20,title: 'good'},
    {username: 'Hellen',age: 20,title: 'good'},];
  constructor() { }

  ngOnInit(): void {
  }

}
