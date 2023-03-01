// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { LoginServiceService } from "../../../services/login-service.service"
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {

//   constructor(private fb: FormBuilder, private login: LoginServiceService, private router: Router) { }
//   form: FormGroup = new FormGroup({});
//   ngOnInit(): void {
//     this.form = this.fb.group({
//       name:[null,[Validators.required,Validators.minLength(2)]],
//       email: [null, [Validators.required, Validators.pattern("^[A-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
//       password:["",[Validators.required,Validators.minLength(8)]],
//       re_password:["",[Validators.required,Validators.minLength(8)]]
//     });
  
//   }

//  get(){
//   console.log(this.form.controls['re_password'].value)
  
//  }

//   onSubmit() {
// if(this.form.controls['re_password'].value==this.form.controls['password'].value){
//     this.login.register(this.form.value).subscribe((res: any) => {
//       alert(res.message)
//       if (res.success == true) {
//         this.router.navigate(["/login"])
//       } else {
//         this.router.navigate(["/register"])
//       }
//     }, (err => {

//       this.router.navigate(["/register"])
//       alert(err.error.message)
//     }))}else{
//       alert("Password didn't match ")
//     }
//   }


//   class="bi-eye-slash"
// type="password"
// showP(){
//   if (this.class == "bi-eye-slash") {
//     this.class="bi-eye"
//     this.type="text"
//     // bi-eye-slash
    
//   } else {
//       this.type="password"
//       this.class = "bi-eye-slash";
  
      
//     }
//   }
// }
