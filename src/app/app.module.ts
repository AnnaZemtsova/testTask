import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Submenu1Component } from './submenu1/submenu1.component';
import { Submenu2Component } from './submenu2/submenu2.component';
import { Submenu3Component } from './submenu3/submenu3.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Submenu1Component,
    Submenu2Component,
    Submenu3Component,
    Menu2Component,
    Menu3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
