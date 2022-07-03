import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listMicros, Micros } from 'src/app/Interface/micros';

@Component({
  selector: 'app-microadmin',
  templateUrl: './microadmin.component.html',
  styleUrls: ['./microadmin.component.scss']
})
export class MicroadminComponent implements OnInit {
  formulario:FormGroup;
  numero:AbstractControl;
  color:AbstractControl;
  inicio:AbstractControl;
  final:AbstractControl;

  listMicros:Array<Micros>;
  constructor(public fb:FormBuilder){
    this.formulario=this.fb.group({
      numero:['',Validators.required],
      color:['',Validators.required],
      inicio:['',Validators.required],
      final:['',Validators.required],
    });
    this.numero=this.formulario.controls["numero"];
    this.color=this.formulario.controls["color"];
    this.inicio=this.formulario.controls["inicio"];
    this.final=this.formulario.controls["final"];
    this.listMicros=listMicros;
  }  

  async ngOnInit() {
    const aux = await fetch('http://localhost:9000/api/micros',{
        method: 'GET'
    }).then(response=>response.json());
    this.listMicros =aux;

  }
 
  crear(){
    let micro:Micros={
      numero : this.numero.value,
      color : this.color.value,
      inicio : this.inicio.value,
      final : this.final.value,
    }

    let microJson = JSON.stringify(micro);
    fetch('http://localhost:9000/api/micros',{
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: microJson
    });   
    
    window.location.reload();    
  }


}