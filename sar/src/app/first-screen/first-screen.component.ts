import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {

  constructor(public router: Router) {
  }

  onClick = function() {
    var checkBox = <HTMLInputElement>document.getElementById("myCheck");
    var button = <HTMLInputElement>document.getElementById("unDisable");
    if (checkBox.checked == true){
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  onClickSubmit = function() {
    this.router.navigateByUrl("/second-screen");
  }

  ngOnInit() {
  }

}
