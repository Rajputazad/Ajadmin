import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserinfoService } from 'src/app/services/userinfo.service';
@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.scss']
})
export class AddinfoComponent {
  constructor(private fb: FormBuilder, private info: UserinfoService) { }
  form: FormGroup = new FormGroup({});
  update = false
  ngOnInit(): void {
    this.storage()
    // this.userinfo()
    this.form = this.fb.group({
      carname: [null, [Validators.required, Validators.minLength(3)]],
      model: [null, [Validators.required, Validators.minLength(3)]],
      history: [null, [Validators.required]],
      kilometers: [null, Validators.required],
      service: [null, Validators.required],
      registration: [null, Validators.required],
      owner: [null, Validators.required],
      fuel: [null, Validators.required],
      transmission: [null, Validators.required],
      insurance: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      
    });
  }
  user: any
  storage() {
    var user: any = localStorage.getItem("user")
    this.user = JSON.parse(user)
  }
files:any

  carimg(file: any){
    this.files=file.target.files
    console.log(this.files);
    
  }

  
  updateuser() {
    this.info.updateuser(this.form.value).subscribe((res: any) => {
      if (res.success) {
        alert(res.message)
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err);
    })

  }

  phone(event: any) {
    var key;
    key = event.charCode;  //   
    // key = event.keyCode;  (Both can be used)
    return ((key > 41 && key < 58));
  }
  saveDetails(form: any) {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    this.info.userinfo(this.form.value).subscribe((res: any) => {
      if (res.success) {
        alert(res.message)
        this.ngOnInit()
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err);
    })
  }
}
