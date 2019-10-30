import { Component, OnInit, Input } from '@angular/core';
import { Login } from "../../Serivces/Login.service"
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import{FormControl} from "@angular/forms";
import{MatFormFieldControl} from "@angular/material/form-field";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  userName = ""; password = ""; age = 0;  country = "";email = "";
 
  

  constructor(public Login: Login) { }

  signUp() {
    const { userName, password, age, email } = this
    if (userName && password && age&&email) {
      const Body = { userName, password, age, email }
      this.Login.SignUp(Body).subscribe((resp:any)=>{
        if(resp.message ==="success"){
          alert("Data Saved")
        }
        else{
          alert("Error")
        }
      })
    }else{
      alert("Full all fields y 3l2")
    }
    }
  
  }
