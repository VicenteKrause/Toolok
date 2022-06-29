import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.scss']
})
export class TransporteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  metro(){
    window.location.href='./metro';
  }
  taxi(){
    window.location.href='./taxi';
  }
  colectivo(){
    window.location.href='./colectivo';
  }
  micros(){
    window.location.href='./micros'
  }
}
