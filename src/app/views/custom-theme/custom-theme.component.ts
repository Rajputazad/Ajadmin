import { Component } from '@angular/core';
import { UserinfoService } from 'src/app/services/userinfo.service';
@Component({
  selector: 'app-custom-theme',
  templateUrl: './custom-theme.component.html',
  styleUrls: ['./custom-theme.component.scss']
})
export class CustomThemeComponent {
  selected: any = false
  constructor(private theme: UserinfoService) { }
  select(id: any,url:any) {
    const data = {
      themeid: id,
      portfoliourl:url
    }

    this.theme.themeselect(data).subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem("user", JSON.stringify(res.data))
        alert(res.message)
        this.ngOnInit()
      } else {
        console.log(res.message);
      }

    }, err => {
      console.log(err);
      if (err.error.message) {
        alert(err.error.message)
      }
    })

  }

  ngOnInit() {
    this.themelists()
  
  }
  themes: any;

  themelists() {
    this.theme.themelist().subscribe((res: any) => {
      if (res.success) {
        this.themes = res.data
        this.local()
      } else {
        console.log(res.message);
      }

    }, err => {
      console.log(err);
      if (err.error.message) {

      }
    })
  }

  themeid: any

  local() {
    var id: any = localStorage.getItem("user")
    id = JSON.parse(id)
    this.themeid = id.themeid
  }

}
