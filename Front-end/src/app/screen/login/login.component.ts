import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { listUsers, User} from 'src/app/Interface/users';
import { __await } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;
  password:AbstractControl;
  mail:AbstractControl;
  listUsers:Array<User> = [];
  admi:boolean;

  constructor(public fb:FormBuilder) {
    this.formulario=this.fb.group({
      password:['',[Validators.required]],
      mail:['',[Validators.required]],
     });
 
     this.password = this.formulario.controls["password"];
     this.mail = this.formulario.controls["mail"];
     this.listUsers = listUsers;
     this.admi=false;
   }

  ngOnInit(): void {
  }
  async iniciar(){
    let usuario:User={
      password:this.password.value,
      name:this.mail.value,
      admin:false

    } 
    try{
      
      let usuariJson = JSON.stringify(usuario);
      
      const resp = await fetch('http://localhost:9000/api/registrar',{
          method: 'POST',
          headers: {
            "Content-Type" : "application/json"
          },
          body: usuariJson
      });
      window.alert("Procesasndo"); 
      if(resp.status === 200){
        window.alert("Secion Iniciada Admin");        
        
        window.location.href="/home/loged"; 
      }else if(resp.status === 300){
        window.alert("Secion Iniciada");
        window.location.href="/home";
      }
      else{
        window.alert("error");
      }
      
    }finally{
    } 
    
  }
  async admin(usuar:User){
    try{
      
      let usuariJson = JSON.stringify(usuar);
      
      const resp = await fetch('http://localhost:9000/api/admin',{
          method: 'POST',
          headers: {
            "Content-Type" : "application/json"
          },
          body: usuariJson
      });
      window.alert("Procesasndo"); 
      if(resp.status === 200){
        window.alert("Secion Iniciada");        
        
        window.location.href="/home/loged"; 
      }
      else{
        window.alert("error");
      }
      
    }finally{
    } 
  }
}
