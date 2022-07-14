import { StorageService } from './../storage.service';
import { LoginService } from './../login.service';
import { Component, OnInit, AfterViewInit, HostListener, DoCheck, ViewChild, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logInOutSwitch:string = localStorage.getItem('token') ? '登出' : '登入';
  tokenKey:string = Boolean(localStorage.key(0)) ? localStorage.key(0)!.toString() : "";
private sub1: any = new Subject();
@ViewChild('modal',{read: ViewContainerRef}) modal!:ViewContainerRef;

  constructor(private service:LoginService,private storageService: StorageService,private router:Router) {
    // this.storageService.getStorage().subscribe(x => x)
  }

  ngOnInit(): void {
    this.sub1 = this.storageService.changes.subscribe(localStorage =>
      {
        this.tokenKey = localStorage.key;
        Object.values(localStorage).length ? this.logInOutSwitch = "登出" : this.logInOutSwitch = "登入";
      });
  }

  ngDoCheck(): void {
    Object.values(localStorage).length ? this.logInOutSwitch = "登出" : this.logInOutSwitch = "登入";
  }

  ngOnDestroy(): void {
    // this.sub1.unsubscribe();
  }

  canLogin(){
    switch(this.logInOutSwitch){
      case '登入':
        this.router.navigate(['./login']);
        break;
      case '登出':
        const popupComponentRef = this.modal.createComponent(PopupComponent);
        popupComponentRef.instance.title = "確定要登出嗎?";
        popupComponentRef.instance.tokenKey = this.tokenKey;
        popupComponentRef.instance.route = "./login";
        popupComponentRef.instance.component = popupComponentRef;
    }
  }
}

