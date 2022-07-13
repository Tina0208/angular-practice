import { HttpClient } from '@angular/common/http';
import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router,private storageService: StorageService) { }

  login(data:any){
    this.http.post('https://h2u-life-bot.herokuapp.com/test/login',data).subscribe({
      next: (x:any)=>{
        // alert('登入成功');
        // localStorage.setItem('token', 'Bearer ' + x['token']);

        this.storageService.store('token', 'Bearer ' + x['token'])

        console.log('log in')
        this.router.navigate(['/index'])
      },
      error: (x)=>{
        alert(x.error.msg)
      }
    })
  }
}



