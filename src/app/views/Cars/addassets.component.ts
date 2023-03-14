import { Component } from '@angular/core';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.component.html',
  styleUrls: ['./addassets.component.scss']
})
export class AddassetsComponent {
  constructor( private Carinfo: UserinfoService) { }
data:any
  ngOnInit(): void {
   this.cars()
  }
 
  cars() {
    this.Carinfo.carifoget().subscribe((res: any) => {

      
      if (res.success) {

        this.data = res.data
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err);
    })
  }
 
}