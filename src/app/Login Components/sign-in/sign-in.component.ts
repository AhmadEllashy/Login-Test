import { Component, OnInit } from '@angular/core';
import{Login} from "../../Serivces/Login.service";
import{Router, Route}from "@angular/router"
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userName  = ""; password = "";  age = 0;country = ""; email = "";

  constructor(public Login : Login , public router :Router) { }

  ngOnInit() {
  }

  
 
  signIn(){
    const  {password ,email} = this

    if(email && password){
      const Body = {email , password }
      this.Login.signIn(Body).subscribe((resp:any)=>{
        if(resp.body.message === "success"){
       this.Login.message = resp.body.message
    
       alert("Welcome")
       this.router.navigate(["/Home"])
        }else{
          alert("Email or password is invalid ")
        }
      })
    }else{
      alert("Full fields")
    }
  }

}
