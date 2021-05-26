import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listts={
    content:'A Practicle Guide to HTML&CSS is led by designer and front end developer',
    secondcontent:'Additional help has been generously provided from a few',
    thirdcontent:'Taught in person as a part of',
    thsubcontent:'in beautiful downtown chicago, Illinois.',
    contentbutton:'Follow @shayhowe'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
