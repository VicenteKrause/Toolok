import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listMicros, Micros } from 'src/app/Interface/micros';
import { LoginComponent} from '../login/login.component'



@Component({
  selector: 'app-micros',
  templateUrl: './micros.component.html',
  styleUrls: ['./micros.component.scss'],
})
export class MicrosComponent implements OnInit {
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
}
