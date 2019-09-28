import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../models/user-response';
import { UserResponseService } from '../services/user-response.service';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };

export class SecondScreenComponent implements OnInit {

  // console.log(document);
  // (<HTMLInputElement>document).querySelector("input").addEventListener("click", function() {
  //   alert("Hello, World!");
  // });

  constructor(
    public userResService: UserResponseService
  ) {  }

  onClick() {
    document.getElementsByClassName("container")[0].scrollTo({
      top: document.getElementsByClassName("container")[0].scrollTop + screen.height,
      behavior: 'smooth'
    });
    console.log("hello");
  }

  ngOnInit() {

  }

  onClickSubmit = function() {

    var url = 'api/firstScreen';

    var userIdentification = <HTMLSelectElement>document.getElementById("userIdentification");
    var ageRange = <HTMLSelectElement>document.getElementById("ageRange");
    var country = <HTMLSelectElement>document.getElementById("country");
    var primaryLang = <HTMLSelectElement>document.getElementById("primaryLang");
    var employmentStatus = <HTMLSelectElement>document.getElementById("employmentStatus");
    var disciplineArea = <HTMLSelectElement>document.getElementById("disciplineArea");
    var sensitivity = <HTMLSelectElement>document.getElementById("sensitivity");

    var res = new UserResponse(userIdentification.value, ageRange.value, country.value, primaryLang.value, employmentStatus.value, disciplineArea.value, sensitivity.value);

    this.userResService.submitUserResponse(res).subscribe(resFromSubmit => console.log(resFromSubmit));


    // alert(ageRange.value);
  }

}
