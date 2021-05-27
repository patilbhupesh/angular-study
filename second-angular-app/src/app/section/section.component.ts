import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
export class Book{

  name: string;    
     constructor(name:string)    
     {    
       
       this.name = name;    
    }    
 
}
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  sectionts={
    titletwo:'An Advanced Guide to HTML & CSS',
    Content:'An Advanced Guide to HTML & CSS'
  }

  books : Book[];

  constructor() {
    this.books = [
      {name:"Terminology, Syntax, &Introduction"},
      {name:"Elements & Symantics"},
      {name:"Box Model & Positioning"},
      {name:"Typography"},
      {name:"Background & Gradients"},
      {name:"Unordered, Ordered & Definition Lists"},
      {name:"Images,Audio & video"},
      {name:"Building Forms"},
      {name:"Organizing Data with Tables"},
      {name:"Coding Practices & Additional Resources"}
   ];

   }

  ngOnInit(): void {
  }

}
