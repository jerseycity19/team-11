import { Component, OnInit, ViewChild } from '@angular/core';
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
    alert("hello, world");
  }

  constructor() { }

  ngOnInit() {

  }

}
