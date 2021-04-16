import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WallComponent} from './components/wall/wall.component';
import {UserAuthGuard} from '../user-auth.guard';

const routes: Routes = [
  {
    path: 'wall/:id' , component: WallComponent, canActivate: [UserAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
