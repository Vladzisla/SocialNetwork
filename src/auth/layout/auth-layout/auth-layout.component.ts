import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../../services/local-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserAuthService} from '../../../services/user-auth.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              private userService: UserAuthService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   //  this.route.params.subscribe(params => {
   //    console.log(params);
   //    if (this.localStorageService.get('token') && !params.id){
   //    this.userService.getLoggedIn().subscribe(data => {
   //      this.userService.setLoggedIn(data.role);
   //      this.router.navigate([`/wall/${data.id}`]);
   //    });
   //  }
   //
   // });
  }
    // if (this.localStorageService.get('token')){
    //   this.userService.getLoggedIn().subscribe(data => {
    //     this.userService.setLoggedIn(data.role);
    //     this.router.navigate([`/wall/${data.id}`]);
    //
    //   });
    // }
  }

