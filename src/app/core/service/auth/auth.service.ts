import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponseTypes } from '../../interfaces/api-response-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient){}
  private apiUrl = 'http://localhost:3000'
  isLoginInUser = new BehaviorSubject(false);

  login(email:string , password:string) : Observable<ApiResponseTypes['loginResponse']>{
    return this.http.post<ApiResponseTypes['loginResponse']>(`${this.apiUrl}/login`, {email, password})
  }

  register(userName: string, lastName:string, email:string, password:string, cPassword:string): Observable<any>{
   return this.http.post(`${this.apiUrl}/register`, {userName, lastName, email,  password,  cPassword} )
  }

  getProtectedData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/protected`);
  }

  saveToken(token:string):void{
  
    console.log('SAVE TOKKEN');
    
    localStorage.setItem("token", token)
  }
  getToken():string | null{
    
    
    return localStorage.getItem("token")
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  logOut():void{
    localStorage.removeItem('token')
    this.isLoginInUser.next(false)
  }
}
