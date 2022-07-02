import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  home(){
    var path = window.location.pathname;
    if (path == '/home/loged') {
      window.location.href="/home/loged";
    }else{
      window.location.href="/home";
    }
  }
    
  login(){
    window.location.href="/login";
  }
  show(){
    var path = window.location.pathname;
    if (path == '/home/loged') {
      return false;
    }
    return true;
  }
  
}
