import{HttpClient}from "@angular/common/http"
import{Injectable}from "@angular/core"

@Injectable({
    providedIn:"root"
})
export class Login{
    message :string = ""
    constructor(public Http:HttpClient){}

    signIn(Data){
     return   this.Http.post("http://localhost:8030/signIn",Data,{
            observe:"response",
            withCredentials:true

        })

    }
    SignUp(Data){
     return   this.Http.post("http://localhost:8030/signUp",Data,{})
    }
    
    Get(){
      return  this.Http.get("http://localhost:8030/Get")
    }
    logOut(){
        return this.Http.get("http://localhost:8030/logOut")
    }
}
