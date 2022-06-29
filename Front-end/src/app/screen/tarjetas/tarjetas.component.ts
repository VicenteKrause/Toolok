import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  formulario:FormGroup;
  exampleNum = 150;
  numer:AbstractControl;

  constructor(public fb:FormBuilder) {
    this.formulario=this.fb.group({
      numer:['',Validators.required],
    });
    this.numer=this.formulario.controls["numer"];
   }
  // fetch(){
  //   let get = Document.getElementById("customRange1").value;
  //   Document.getElementById("put").value = get;
  // }
  ngOnInit(): void {
  }

  suma(){
    if(this.exampleNum<10000){
      this.exampleNum = this.exampleNum+50;
    }else{
      window.alert("No puede exceder los $10.000 pesitos");
    }
   
  }
  resta(){
    if(this.exampleNum>150){
      this.exampleNum = this.exampleNum-50;
    }else{
      window.alert("No puede ser inferior a $150 pesitos");
    }
    
  }
  home(){
    // var num =  this.numer.value;
    // var rest = num%50;
    // var numf;
    // if(rest>0){
    //   rest=Math.trunc(num/50)+1;
    //   numf=rest*50;
    //   console.log(numf);
    // }  

    window.location.href="/home";
    window.alert("Recarga exitosa");
    
  }
}
