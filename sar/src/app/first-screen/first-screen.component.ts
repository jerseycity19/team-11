import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {

  onClick() {
    var checkBox = document.getElementById("myCheck");
  var button = document.getElementById("unDisable");
  if (checkBox.checked == true){
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  }


  constructor() { 
  }

  ngOnInit() {
  }

}
