import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  pagets={
    title: 'A Practicle Guide to',
    subtitle: 'HTML & CSS',
    content: 'Some home content.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
