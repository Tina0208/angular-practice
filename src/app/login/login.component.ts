import { LoginService } from './../login.service';
import { Component, EventEmitter, Input, OnInit, Output, DoCheck, OnChanges, SimpleChanges, AfterViewInit, AfterContentInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup ({
    username: new FormControl(),
    password: new FormControl()
  })
  isLogin:boolean = false;

  constructor(private http:LoginService) { }

  ngOnInit(): void {
    this.isLogin = this.http.isLogin();
  }

  login(){
    console.log(this.formLogin.value);
    this.http.login(this.formLogin.value)
  }
}
