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
  @Output() passLoginEvent = new EventEmitter<boolean>();

  constructor(private loginService:LoginService) { }

  ngOnInit(): void { }

  login(){
    this.loginService.login(this.formLogin.value);
  }
}
