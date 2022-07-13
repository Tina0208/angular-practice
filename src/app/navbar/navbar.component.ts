import { StorageService } from './../storage.service';
import { LoginService } from './../login.service';
import { Component, OnInit, AfterViewInit, HostListener, DoCheck } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logInOutSwitch:string = localStorage.getItem('token') ? '登出' : '登入';
  tokenKey:string = '';
private sub1: any = new Subject();

  constructor(private service:LoginService,private storageService: StorageService,private router:Router) {
    // this.storageService.getStorage().subscribe(x => x)
  }

  ngOnInit(): void {
    this.sub1 = this.storageService.changes.subscribe(x =>
      {
        this.tokenKey = x.key;
        Object.values(x).length ? this.logInOutSwitch = "登出" : this.logInOutSwitch = "登入";
        console.log(x)
      });
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
        this.storageService.clear(this.tokenKey);
        this.logInOutSwitch = "登入"
        this.router.navigate(['./login']);
    }
  }
}

