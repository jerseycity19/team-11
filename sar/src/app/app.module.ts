import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';
import { ForthScreenComponent } from './forth-screen/forth-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent
    ThirdScreenComponent,
    ForthScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
