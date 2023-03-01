import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from "../../../services/login-service.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private login: LoginServiceService, private router: Router) { }
  form: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.pattern("^[A-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:["",[Validators.required,]]
    });
  }

  onSubmit() {
    this.login.login(this.form.value).subscribe((res: any) => {
      if (res.success == true) {
        alert(res.message)
        this.router.navigate(["/dashboard"])
      } else {
        alert(res.message)
      }
    }, (err => {


      alert(err.error.message)
    }))
  }
  class="bi-eye-slash"
type="password"
showP(){
  if (this.class == "bi-eye-slash") {
    this.class="bi-eye"
    this.type="text"
    // bi-eye-slash
    
  } else {
      this.type="password"
      this.class = "bi-eye-slash";
  
      
    }
  }
}
