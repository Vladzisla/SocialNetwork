import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthModule} from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';
import {RouterModule, Routes} from '@angular/router';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: AppComponent,
  },
  {
    path: '**', component: NotfoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AuthModule,
    ProfileModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
