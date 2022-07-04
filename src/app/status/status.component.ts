import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    {username: 'Tina',age: 20,title: 'good'},
    {username: 'Hellen',age: 20,title: 'good'},];
  constructor() { }

  ngOnInit(): void {
  }

}
