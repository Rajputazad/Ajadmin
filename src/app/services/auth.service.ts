import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToken() {
    var token:any = localStorage.getItem("auth")
    token = JSON.parse(token)
    return token
  }

}
