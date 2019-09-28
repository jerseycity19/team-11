import { Component, OnInit, ViewChild } from '@angular/core';
import $ from 'jquery';
// import * as $ from 'jquery';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {

  // console.log(document);
  // (<HTMLInputElement>document).querySelector("input").addEventListener("click", function() {
  //   alert("Hello, World!");
  // });

  onClick() {
    document.getElementsByClassName("container")[0].scrollTo({
      top: document.getElementsByClassName("container")[0].scrollTop + screen.height,
      behavior: 'smooth'
    });
    console.log("hello");
  }

  onSubmit() {
    alert("Your response has been securely submitted for further analysis. Thank you for your participation.");
  }


  scrollCallback() {
    var docHeight = document.getElementsByClassName("container")[0].scrollHeight;
    var curPos = document.getElementsByClassName("container")[0].scrollTop;
    var percent = Math.floor((curPos / docHeight) * 100);
    $(".progress-bar").text(percent + "%");
    $(".progress-bar").css('width', percent + '%');
    $(".progress-bar").attr("aria-valuenow", percent);

  }

  constructor() { }

  ngOnInit() {

  }

}
