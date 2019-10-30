import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SignInComponent} from "./Login Components/sign-in/sign-in.component"
import{SignUpComponent} from "./Login Components/sign-up/sign-up.component"
import{HomeComponent}from "./home/home.component"




const routes: Routes = [
  {path:"signIn" , component:SignInComponent},
  {path:"signUp" , component:SignUpComponent},
  {path:"Home" , component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
