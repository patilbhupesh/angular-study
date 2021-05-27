import { Component, OnInit } from '@angular/core';

export class Book{

  name: string;    
     constructor(name:string)    
     {    
       
       this.name = name;    
    }    
 
}

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent implements OnInit {

subtitlets={
  titleone:'A Beginners Guide to HTML & CSS',
  content:'is a simple & comprehensive guide dedicated to helping beginners learn HTML & CSS.',
  contentbutton:'A BEGINNERS GUIDE TO HTML & CSS'
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
