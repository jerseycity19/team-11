import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';
import { UserResponseService } from './services/user-response.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    SecondScreenComponent,
    ThirdScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    UserResponseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
