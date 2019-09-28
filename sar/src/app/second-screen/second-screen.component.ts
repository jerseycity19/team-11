import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
