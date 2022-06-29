import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listUsers, User} from 'src/app/Interface/users';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  formulario:FormGroup;
  password:AbstractControl;
  mail:AbstractControl;
  listUsers:Array<User> = [];
  siteKey : string;


  constructor(public fb:FormBuilder){
    this.siteKey='6LeHYq8gAAAAAL8HX0WlLtGKeWv66C9eUyBzuZXL';
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

  login(){
   console.log();
  }
  crear() {
    
    let usuario:User={
      password:this.password.value,
      name:this.mail.value,
      admin:false

    } 
    let usuariJson = JSON.stringify(usuario);
    console.log(usuariJson);
    
    fetch('http://localhost:9000/api/users',{
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: usuariJson
    });
    
  }
  
}
