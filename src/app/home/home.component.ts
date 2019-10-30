import { Component, OnInit } from '@angular/core';
import{Login}from "../Serivces/Login.service";
import{Router}from "@angular/router"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Users = []
  constructor(public Login:Login , public router:Router) { }

  ngOnInit() {
  }
  get(){
    this.Login.Get().subscribe((resp:any)=>{
      if(resp.message ==="success"){
        debugger
        this.Users = resp.result.map((v,i)=>{return{
          id : v._id,
          userName:v.userName,
          age : v.age,
          email : v.email
        }})
      }else{
        if(resp.message ==="auth_error"){
          alert("Please Login")
          this.router.navigate(["/signIn"])
        }
      }
    })
  }
}
