import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../../services/login-service.service"

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private users: LoginServiceService) {
  }
  value: any = 0
  done: any = false
  task: any = 0
  ngOnInit(): void {
    this.home()
  }
  data: any;

  home() {
    this.users.home().subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem("user", JSON.stringify(res.data))
        this.data = res.data
        this.tasks()
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err);
    })
  }



  task1: any;
  task2: any;
  task3: any;
  tasks() {
    if (this.data.themeselection == "done") {
      this.value = this.value + 33.4
      this.task = this.task + 1
      this.task1 = true
    } else {
      this.task1 = false
    }
    if (this.data.information == "done") {
      this.value = this.value + 33.4
      this.task = this.task + 1
      this.task2 = true
    } else {
      this.task2 = false
    }
    if (this.data.assets == "done") {
      this.value = this.value + 33.4
      this.task = this.task + 1
      this.task3 = true
    } else {
      this.task3 = false
    }
if(this.value>100){
  this.value=100
}

if(this.data.portfoliourl&&this.task2==true){
 this.url= this.data.portfoliourl+this.data._id
}

  }

url:any

}
