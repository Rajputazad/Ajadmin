import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { AuthService } from './auth.service';
import { map } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginServiceService, private router: Router,private AuthService:AuthService) {}

 
  canActivate(): boolean {
    // console.log(this.checkUser());    
    return this.checkUser()
}
checkUser(): any {
    return this.authService.home().pipe(
        map((res: any) => {
            // console.log(res);                
            if (res.success == true) {
                return true

            } else {
  
                this.router.navigate(["/login"])
           
                return false
            }
        })
    )
}
}
