import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {UserRegistration} from '../../interfaces/user-registration';
import {UserLogin} from '../../interfaces/user-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  loginForm: FormGroup;
  message$: Observable<any>;
  public sendDisable = true;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
    });
    this.loginForm.statusChanges.subscribe((status) => this.sendDisable = status === 'INVALID');
  }
  onSubmitted(): void{
    const body: UserLogin = {
      login: this.loginForm.get(['login']).value,
      password: this.loginForm.get(['password']).value,
    };

    this.message$ = this.userService.loginUser(body);
  }

}
