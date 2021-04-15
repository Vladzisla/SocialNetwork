import { Injectable } from '@angular/core';
import {UserRegistration} from '../auth/interfaces/user-registration';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserLogin} from '../auth/interfaces/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  createUser(user: UserRegistration): Observable<any>{
    return this.http.post(`http://localhost:3000/users/registration`, user);
  }
  loginUser(user: UserLogin): Observable<any>{
    return this.http.put(`http://localhost:3000/users/login`, user);
  }
}
