import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

data = ["Learn how to build beautiful & intuitive websites."];

  constructor() {
    console.log("app-header constructor called");
    
   }

  ngOnInit(){
   console.log("app-header ngOnInit called");
    
  }

}



