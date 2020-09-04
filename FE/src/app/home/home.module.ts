import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './screens/home/home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { Item1Component } from './components/item1/item1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, Item1Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
