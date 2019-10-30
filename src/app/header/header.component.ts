import { Component, OnInit ,ViewChild ,AfterViewInit, OnChanges } from '@angular/core';
import{Login}from "../Serivces/Login.service"
import{SignInComponent}from "../Login Components/sign-in/sign-in.component"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  dis : boolean
  
  constructor(public Login : Login) { }

  ngOnInit() {

  
  }
 
     

  logOut(){

    this.Login.logOut().subscribe((resp:any)=>{
      if(resp.message ==="success"){
        alert("Logged Out")
      }else{
        alert("error")
      }
    })
  }

}
