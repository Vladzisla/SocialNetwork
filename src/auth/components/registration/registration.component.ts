import {Component, OnInit, Renderer2} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRegistration} from '../../interfaces/user-registration';
import {UserService} from '../../../services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private userService: UserService, private rd: Renderer2) {  }
  registrationForm: FormGroup;
  message$: Observable<any>;
  public sendDisable = true;

  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.email]),
      login: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      passwordRep: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      secondName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])

    }, {validators: this.checkPasswords});
    this.registrationForm.statusChanges.subscribe((status) => this.sendDisable = status === 'INVALID');
  }

  checkPasswords(group: FormGroup): { notSame: boolean }{
    const password = group.get('password').value;
    const confirmPassword = group.get('passwordRep').value;
    return (password === confirmPassword) ? null : { notSame: true };
  }

  onSubmitted(): void{
    const body: UserRegistration = {
      email: this.registrationForm.get(['email']).value,
      login: this.registrationForm.get(['login']).value,
      password: this.registrationForm.get(['password']).value,
      repeat_password: this.registrationForm.get(['passwordRep']).value,
      firstName: this.registrationForm.get(['firstName']).value,
      secondName: this.registrationForm.get(['secondName']).value
    };
    this.message$ = this.userService.createUser(body);
  }
}
