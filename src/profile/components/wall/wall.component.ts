import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../../../services/user-auth.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  constructor(private userService: UserAuthService) { }

  ngOnInit(): void {
  }

}
