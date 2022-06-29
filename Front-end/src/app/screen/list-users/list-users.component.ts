import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listUsers , User } from 'src/app/Interface/users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers:Array<User>;


  constructor(public fb:FormBuilder){
    this.listUsers  =listUsers; 
  }  


  ngOnInit(): void {
  }

}
