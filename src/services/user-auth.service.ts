import { Injectable } from '@angular/core';
import {UserRegistration} from '../auth/interfaces/user-registration';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserLogin} from '../auth/interfaces/user-login';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private loggedInStatus: boolean | string = false;


  constructor(private readonly http: HttpClient, private localStorageService: LocalStorageService) { }

  // getLoggedIn(): Observable<any>{
  //   const headers = new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': `Bearer ${this.localStorageService.get('token')}`
  //   });
  //   return this.http.get(`http://localhost:3000/users/auth-check`, {headers});
  // }

  setLoggedIn(value: boolean | string): void{
    this.loggedInStatus = value;
  }

  get isLoggedIn(): boolean | string{
    return this.loggedInStatus;
  }

  createUser(user: UserRegistration): Observable<any>{
    return this.http.post(`http://localhost:3000/users/registration`, user);
  }
  loginUser(user: UserLogin): Observable<any>{
    return this.http.put(`http://localhost:3000/users/login`, user);
  }
  getUser(id: string, ): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${this.localStorageService.get('token')}`
    });
    return this.http.get(`http://localhost:3000/users/${id}`, {headers});
  }
}
