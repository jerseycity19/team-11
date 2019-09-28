import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { UserResponse } from '../user-response';
// import * as $ from 'jquery';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

export class SecondScreenComponent implements OnInit {

  // console.log(document);
  // (<HTMLInputElement>document).querySelector("input").addEventListener("click", function() {
  //   alert("Hello, World!");
  // });

  constructor(http: HttpClientModule) { }

  onClick() {
  }

  ngOnInit() {

  }

  onClickSubmit = function() {

    var url = 'api/firstScreen';

    var userIdentification = <HTMLSelectElement>document.getElementById("userIdentification"));
    var ageRange = <HTMLSelectElement>document.getElementById("ageRange");
    var country = <HTMLSelectElement>document.getElementById("country");
    var primaryLang = <HTMLSelectElement>document.getElementById("primaryLang");
    var employmentStatus = <HTMLSelectElement>document.getElementById("employmentStatus");
    var disciplineArea = <HTMLSelectElement>document.getElementById("disciplineArea");
    var sensitivity = <HTMLSelectElement>document.getElementById("sensitivity");

    var res = new UserResponse(userIdentification.value, ageRange.value, country.value, primaryLang.value, employmentStatus.value, disciplineArea.value, sensitivity.value);

    return this.http.post<UserResponse>(url, res);

    // alert(ageRange.value);
  }

}
