import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserinfoService } from 'src/app/services/userinfo.service';
@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.component.html',
  styleUrls: ['./addassets.component.scss']
})
export class AddassetsComponent {
  constructor(private fb: FormBuilder,private assets:UserinfoService) { }
  form: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.form = this.fb.group({
      profile:null,
      resume:null
    });
  }
  profileF:any
  resumeF:any
  profile(file: any){
    this.profileF=file.target.files[0]
    console.log(this.profileF);
    
  }
  
  resume(file: any){
    this.resumeF=file.target.files[0]
  }

  saveDetails() {
    const form1:any=new FormData()
    form1.append("profile", this.profileF)
    form1.append("resume",this.resumeF)
    this.assets.assets(form1).subscribe((res:any)=>{
      if (res.success) {
        alert(res.message)
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err.status);
      if(err.error.message){
        alert(err.error.message)
      }else{
        alert("only image and pdf")
      }
    })
    
}
}