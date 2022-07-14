import { Component, ComponentRef, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
@Input() title:string = "";
@Input() component!:ComponentRef<any>;
@Input() tokenKey:string = "";
@Input() route:string="";
@ViewChild('background') background!:ElementRef;

  constructor(private router:Router, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  confirm(){
      this.storageService.clear(this.tokenKey);
      this.router.navigate([this.route]);
      this.component.destroy();
  }

  closePopup(){
    this.component.destroy();
  }

  onWindowScroll() {
   this.background.nativeElement.style.top = window.scrollY+"px";
}
}
