import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myStorage = null;

  user = null;

  path = "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.myStorage = window.localStorage;
    // console.log(this.myStorage.getItem('user'));
    this.user = this.myStorage.getItem('user');
    this.user = JSON.parse(this.user);
    
  }

  logout(){
    this.user =null;
    this.myStorage.removeItem('user');
    this.router.navigate(['/']);
    
  }

}
