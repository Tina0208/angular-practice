import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logInOutSwitch:string = "登入";
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    // TODO 無效
    console.log(this.service.isLogin());
    this.service.isLogin()? this.logInOutSwitch = "登入" : this.logInOutSwitch = "登出";
  }

  ngOnChanges(): void { }

}
