import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
export class List{

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
    Content:'takes a deeper look at front-end design & development, teaching the latest for any design',
    contentbutton:'AN ADVANCE GUIDE TO HTML & CSS'
  }

  books : List[];

  constructor() {
    this.books = [
      {name:"Performance & Organization"},
      {name:"Detailted Positioning"},
      {name:"Complex Selectors"},
      {name:"Response Web Design"},
      {name:"Preprocessors"},
      {name:"jQuery"},
      {name:"Transforms"},
      {name:"Transitions & Animations"},
      {name:"Feature Support & Polyfills"},
      {name:"Extending Semantics & Accessibility"}
   ];

   }

  ngOnInit(): void {
  }

}
