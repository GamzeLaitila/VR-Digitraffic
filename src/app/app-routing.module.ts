import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'map',
    component: View1Component
  },
  {
    path: 'calendar',
    component: View2Component
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
