import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserinfoService } from 'src/app/services/userinfo.service';
@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.scss']
})
export class AddinfoComponent {
  constructor(private fb: FormBuilder, private Carinfo: UserinfoService) { }
  form: FormGroup = new FormGroup({});
  update = false
  ngOnInit(): void {
    // this.storage()
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
      numberplate: [null, Validators.required],
      
    });
  }
  user: any
  // storage() {
  //   var user: any = localStorage.getItem("user")
  //   this.user = JSON.parse(user)
  // }
files:any

  carimg(file: any){
    this.files=file.target.files
    console.log(this.files);
    
  }

  
  updateuser() {
    this.Carinfo.updateuser(this.form.value).subscribe((res: any) => {
      if (res.success) {
        alert(res.message)
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err);
    })

  }

  Price(event: any) {
    var key;
    key = event.charCode;  //   
    // key = event.keyCode;  (Both can be used)
    return ((key > 41 && key < 58));
  }



  saveDetails(form: any) {
    const form1:any=new FormData()
    form1.append("carname", this.form.get('carname')?.value)
    form1.append("model", this.form.get('model')?.value)
    form1.append("history", this.form.get('history')?.value)
    form1.append("kilometers", this.form.get('kilometers')?.value)
    form1.append("service", this.form.get('service')?.value)
    form1.append("registration", this.form.get('registration')?.value)
    form1.append("owner", this.form.get('owner')?.value)
    form1.append("fuel", this.form.get('fuel')?.value)
    form1.append("transmission", this.form.get('transmission')?.value)
    form1.append("insurance", this.form.get('insurance')?.value)
    form1.append("price", this.form.get('price')?.value)
    form1.append("description", this.form.get('description')?.value)
    form1.append("numberplate", this.form.get('numberplate')?.value)
    for (let i = 0; i < this.files.length; i++) {
    form1.append("images", this.files[i])
    }
    this.Carinfo.carinfo(form1).subscribe((res: any) => {
      if (res.success) {
        alert(res.message)
        // this.ngOnInit()
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err);
    })
  }
}
