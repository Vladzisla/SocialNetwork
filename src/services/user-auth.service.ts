import { Injectable } from '@angular/core';
import {UserRegistration} from '../auth/interfaces/user-registration';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserLogin} from '../auth/interfaces/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private loggedInStatus: boolean | string = false;

  constructor(private readonly http: HttpClient) { }

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
}
