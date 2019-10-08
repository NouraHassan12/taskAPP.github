import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { users } from 'src/app/shared/users.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;
  error_messages={
    'fullName': [
      {type:'required', message:'name must be porvided'} ,

    ],}
  
  users:any[];
  apiUrl:string ='https://jsonplaceholder.typicode.com/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'appliation/json'
    })
  }
  constructor(private http:HttpClient , private fb:FormBuilder ,) { }

  ngOnInit(){
    this.http.get<users[]>(this.apiUrl)
    .subscribe(res =>{
     this.users=res});

     this.myForm = this.fb.group({
      fullName: new FormControl('' ,Validators.required)
     })
  }

    adduser(input:HTMLInputElement){
      let users={name:input.value }
      this.http.post(this.apiUrl , JSON.stringify(users)).subscribe(res=>{
        this.users.splice(0,0,users);
       
      })}


deletuser(name){
console.log(name)
this.users.splice(name ,1)
  }

 







 



}
