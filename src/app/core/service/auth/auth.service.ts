import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = signal(false);
  isLoginInUser = new BehaviorSubject(false);
  constructor() { }
  login(){
    this.authenticated = signal(false)
  }
}
