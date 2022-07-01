import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  home(){
    let usuario:User={
      password:this.password.value,
      name:this.mail.value,
      admin:false

    } 
    let usuariJson = JSON.stringify(usuario);
    fetch('http://localhost:9000/api/registrar',{
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: usuariJson
    });
    
    
  }
}
