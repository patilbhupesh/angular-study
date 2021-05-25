import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebar={                                         //create object
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
