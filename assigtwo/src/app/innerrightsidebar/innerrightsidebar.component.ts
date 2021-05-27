import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innerrightsidebar',
  templateUrl: './innerrightsidebar.component.html',
  styleUrls: ['./innerrightsidebar.component.scss']
})
export class InnerrightsidebarComponent implements OnInit {

  show = "one"

  collect = [
    {
       fourth: 'Taught in person as part of',
       fifth: 'Additional help has been',
       sixth: 'Preprocessors',
       seventh: 'Building Forms',
  
  
  }

  ]

  constructor() {

    console.log("app-innerrightsidebar constructor called");

  }

  ngOnInit() {

    console.log("app-innerrightsidebar constructor called");

  }

}
