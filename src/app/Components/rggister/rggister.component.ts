import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rggister',
  templateUrl: './rggister.component.html',
  styleUrls: ['./rggister.component.css']
})
export class RggisterComponent implements OnInit {

  myForm: FormGroup;

  error_messages={
    'fullName': [
      {type:'required', message:'name must be porvided'} ,
      {type:'minlength', message:'min lingth is 6 letters'},
      {type:'maxLength', message:'max lingth is 25 letters'},

    ],
    'phone':[
      {type:'required' , message:'phone number must be porvided' },
      {type:'pattern' , message:'you must enter the phone number right' }
    ],

    'email':[
      {type:'required' , message:'Email must be porvided' },
      {type:'pattern' , message:'you must enter the your email right' }
    ],

    'address':[
      {type:'required' , message:'address must be porvided' },
      {type:'minlength', message:'min lingth is 6 letters'},
      {type:'maxLength', message:'max lingth is 25 letters'},
     
    ] ,

    'birthday':[
      {type:'required' , message:'birthday must be porvided' },
      
    ],
    
  
  }
  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: new FormControl('', Validators.compose([Validators.required ,  Validators.minLength(6) , Validators.maxLength(25)])),
      phone : new FormControl('', Validators.compose([Validators.required , Validators.pattern("^(01){1}[0512]{1}[0-9]{8}")])),
      email : new FormControl('', Validators.compose([Validators.required , Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      address : new FormControl('' , Validators.compose([Validators.required , Validators.minLength(6) , Validators.maxLength(60)])),
      birthday: new FormControl('' ,Validators.compose([Validators.required] ))
    })
  }
  }




