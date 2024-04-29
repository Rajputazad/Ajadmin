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
      url:[this.selectedImage]
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

  selectedImage: string | undefined;
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.selectedImage = reader.result as string;
    };
  }

  saveDetails(form: any) {
    // const form1:any=new FormData()
    // form1.append("carname", this.form.get('carname')?.value)
    // form1.append("model", this.form.get('model')?.value)
    // form1.append("history", this.form.get('history')?.value)
    // form1.append("kilometers", this.form.get('kilometers')?.value)
    // form1.append("service", this.form.get('service')?.value)
    // form1.append("registration", this.form.get('registration')?.value)
    // form1.append("owner", this.form.get('owner')?.value)
    // form1.append("fuel", this.form.get('fuel')?.value)
    // form1.append("transmission", this.form.get('transmission')?.value)
    // form1.append("insurance", this.form.get('insurance')?.value)
    // form1.append("price", this.form.get('price')?.value)
    // form1.append("description", this.form.get('description')?.value)
    // form1.append("numberplate", this.form.get('numberplate')?.value)
    // for (let i = 0; i < this.files.length; i++) {
      // if (this.selectedImage) {
      //   // Convert base64 string to Blob
      //   const byteCharacters = atob(this.selectedImage.split(',')[1]);
      //   const byteNumbers = new Array(byteCharacters.length);
      //   for (let i = 0; i < byteCharacters.length; i++) {
      //     byteNumbers[i] = byteCharacters.charCodeAt(i);
      //   }
      //   const byteArray = new Uint8Array(byteNumbers);
      //   const blob = new Blob([byteArray], { type: 'image/jpeg' }); // Adjust type if needed
  
      //   // Append image file to FormData
      //   form1.append("url", blob, "image.jpg");
      // }
    // }
    let data: any = {};

// Add properties to the object
data.carname = this.form.get('carname')?.value;
data.model = this.form.get('model')?.value;
data.history = this.form.get('history')?.value;
data.kilometers = this.form.get('kilometers')?.value;
data.service = this.form.get('service')?.value;
data.registration = this.form.get('registration')?.value;
data.owner = this.form.get('owner')?.value;
data.fuel = this.form.get('fuel')?.value;
data.transmission = this.form.get('transmission')?.value;
data.insurance = this.form.get('insurance')?.value;
data.price = this.form.get('price')?.value;
data.description = this.form.get('description')?.value;
data.numberplate = this.form.get('numberplate')?.value;
    console.log(data);
    console.log(this.selectedImage);
    data.url = this.selectedImage;
    console.log(this.form.get('carname')?.value);
    
    this.Carinfo.carinfo(data).subscribe((res: any) => {
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
