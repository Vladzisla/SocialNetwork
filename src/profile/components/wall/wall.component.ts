import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../../../services/user-auth.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  private id: any;
  public userData$: Observable<any>;

  constructor(private userService: UserAuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.userData$ = this.userService.getUser(this.id);
    this.userData$.subscribe(d => console.log(d));
  }

}
