import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';
import { ForthScreenComponent } from './forth-screen/forth-screen.component';
import { FifthScreenComponent } from './fifth-screen/fifth-screen.component';
import { SixthScreenComponent } from './sixth-screen/sixth-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ThirdScreenComponent,
    ForthScreenComponent,
    FifthScreenComponent,
    SixthScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
