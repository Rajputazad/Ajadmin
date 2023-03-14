import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment"
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  Baseurl=environment.url
  constructor(private http :HttpClient) { 
  }

carinfo(data:any){
  return this.http.post(this.Baseurl+"upload",data)
}
carifoget(){
  return this.http.get(this.Baseurl+"cars")
}

updateuser(data:any){
  return this.http.put(this.Baseurl+"userinfo",data)
}
assets(data:any){
  return this.http.post(this.Baseurl+"assets",data)

}

themeadd(data:any){
  return this.http.post(this.Baseurl+"themeadd",data)
}
themeselect(data:any){
  return this.http.put(this.Baseurl+"themeselect",data)
}
themelist(){
  return this.http.get(this.Baseurl+"themelist")
}

}
