import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { error } from 'selenium-webdriver';
import { log } from 'util';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  createUser(user,next: (res) => void) {

    var body = {
      name: user.name,
      email: user.email,
      password: user.password
    };

    console.log("body",body);

    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    this.http.post("http://localhost:5555/user/signup", body).subscribe((res) => {
      console.log(res);
    }, err => {
      console.log("Error occured.")
    });
  }
}
