import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,private router :Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the authentication token from the AuthService
    const authToken = this.authService.getAuthToken();
    if(!authToken){
     
  this.router.navigate(["/login"])
    }


      
      const authRequest = request.clone({
        setHeaders: { authorization: `Bearer ${authToken}` }
      });
      return next.handle(authRequest);
    // Pass the cloned request instead of the original request to the next interceptor or to the HttpClient
  }



  
}