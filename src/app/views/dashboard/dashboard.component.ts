import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../../services/login-service.service"

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private users: LoginServiceService) {
  }
 
  ngOnInit(): void {
    // this.home()
  }
  data: any;

  home() {
    this.users.home().subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem("user", JSON.stringify(res.data))
        this.data = res.data
        // this.tasks()
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err);
    })
  }



 
}
