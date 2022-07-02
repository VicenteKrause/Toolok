import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { listUsers, User} from 'src/app/Interface/users';

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

  constructor(public fb:FormBuilder) {
    this.formulario=this.fb.group({
      password:['',[Validators.required]],
      mail:['',[Validators.required]],
     });
 
     this.password = this.formulario.controls["password"];
     this.mail = this.formulario.controls["mail"];
     this.listUsers = listUsers;
   }

  ngOnInit(): void {
  }
  async home(){
    let usuario:User={
      password:this.password.value,
      name:this.mail.value,
      admin:false

    } 
    let usuariJson = JSON.stringify(usuario);
    console.log('tula');
    const resp = await fetch('http://localhost:9000/api/registrar',{
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: usuariJson
    });
    console.log('tula');
    while(1){
      console.log(resp.status);
    }
    if(resp.status === 200){      

    }else{
      window.alert("Usuario no registrado")
    }
    
  }
}
