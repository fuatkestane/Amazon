import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public user: any;

  constructor(private service: AppService) {
    this.user = {};
  }
  public createUser() {
    this.service.createUser(this.user, (res) => {
      if (res.ok) {
        this.user = res;
      }else{
        console.log("Error");
      }
    });
  }
}
