import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }

  login(data:any){
    this.http.post('https://h2u-life-bot.herokuapp.com/test/login',data).subscribe({
      next: (x:any)=>{
        alert('登入成功');
        localStorage.setItem('token', 'Bearer ' + x['token']);
        this.router.navigate(['/index'])
      },
      error: (x)=>{
        alert(x.error.msg)
      }
    })
  }

  isLogin(){
    return localStorage.getItem('token') !== "null";
  }
}



