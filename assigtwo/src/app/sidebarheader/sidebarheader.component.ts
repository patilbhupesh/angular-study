import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarheader',
  templateUrl: './sidebarheader.component.html',
  styleUrls: ['./sidebarheader.component.scss']
})
export class SidebarheaderComponent implements OnInit {

  page={
    title: 'A practical Guide To',
    subtitle: 'HTML & CSS',
    content: 'COURSE 101',

  };

  constructor() { 
    console.log("app-sidebarheader constructor called");

  }

  ngOnInit() 
  {
  console.log("app-sidebarheader ngOnInit called")  
  }

}
