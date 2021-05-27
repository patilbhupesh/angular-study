import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  data = ["A Practical Guide to HTML & CSS has one goal – to teach people how to build beautiful and intuitive websites by way of clear and organized lessons. The guide covers a variety of topics within web design and development, ranging from beginner to advanced skill levels."];

  constructor() {
    console.log("app-main-content constructor called")
  }

  ngOnInit()  {
    console.log("app-main-content ngOnInit called")
  }

}
