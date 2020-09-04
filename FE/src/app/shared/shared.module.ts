import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from "./components/pagination/pagination.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PaginationComponent],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports:[
    HeaderComponent, FooterComponent, PaginationComponent
  ]
})
export class SharedModule { }
