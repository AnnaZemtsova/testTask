import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Submenu1Component} from './submenu1/submenu1.component';
import {Submenu3Component} from './submenu3/submenu3.component';
import {Submenu2Component} from './submenu2/submenu2.component';
import {Menu2Component} from './menu2/menu2.component';
import {Menu3Component} from './menu3/menu3.component';

const routes: Routes = [
  {
    path: 'submenu1',
    component: Submenu1Component,
  },
  {
    path: 'submenu2',
    component: Submenu2Component,
  },
  {
    path: 'submenu3',
    component: Submenu3Component,
  },
  {
    path: 'menu2',
    component: Menu2Component,
  },
  {
    path: 'menu3',
    component: Menu3Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
