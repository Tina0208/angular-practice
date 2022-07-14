import { Injectable,OnDestroy } from '@angular/core';
import { Subject,share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnDestroy {
  private onSubject = new Subject<{ key: string, value: any }>();
  public changes = this.onSubject.asObservable().pipe(share());

  constructor() {
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  public getStorage() {
    let s = [];
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i));
      let aaa: string = localStorage.key(i) || "";
      console.log(localStorage.getItem(aaa));
      s.push({
        key: localStorage.key(i),
        value: localStorage.getItem(aaa)
      });
    }
    return s;

  }

  public store(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
    this.onSubject.next({ key: key, value: data})
  }

  public clear(key: string) {
    localStorage.removeItem(key);
    this.onSubject.next({ key: key, value: null });
    console.log(key);
  }


  private start(): void {
    window.addEventListener("storage", this.storageEventListener.bind(this));
  }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea == localStorage) {
      let v;
      try { v = JSON.parse(event.newValue || '{}'); }
      catch (e) { v = event.newValue; }
      this.onSubject.next({ key: event.key!, value: v });
    }
  }

  private stop(): void {
    window.removeEventListener("storage", this.storageEventListener.bind(this));
    this.onSubject.complete();
  }
}
