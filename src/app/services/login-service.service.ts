import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment"
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({

  providedIn: 'root'
})
export class LoginServiceService {
  private isAuthenticated = false;

  Baseurl="http://localhost:3000/"
  constructor(private http :HttpClient) { 
  }

// register(data:any):Observable<any>{
//   return  this.http.post(this.Baseurl+"register",data,{
//     withCredentials:true
//   }).pipe(tap((res:any)=>{
//     if(res.success==true){
//       localStorage.setItem("auth",JSON.stringify(res.token))
//       this.isAuthenticated = true;
//     }else{
//       this.isAuthenticated=false
//     }

//   })
//   )
// }

login(data:any):Observable<any>{
return  this.http.post(this.Baseurl+"login",data,{
    withCredentials:true
  }).pipe(tap((res:any)=>{
    if(res.success==true){
      localStorage.setItem("auth",JSON.stringify(res.token))
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated=false
    }

  })
  )
}

home(){

  return this.http.get(this.Baseurl+"home")
}


logout() {
  this.isAuthenticated = false;
  localStorage.clear()

}

getIsAuthenticated() {
  return this.isAuthenticated;
}


}
