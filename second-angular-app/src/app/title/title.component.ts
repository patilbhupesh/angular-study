import { Component, OnInit } from '@angular/core';

// export class MyItems {    
//   Value: string;    
//   constructor(Value:string)    
//   {    
//     this.Value = Value;    
//   }    
// }   

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  pagets={
    title: 'A Practicle Guide to',
    subtitle: 'HTML & CSS',
    content: 'Course 101',
    subcontent:'A Beginner Guide to HTML & CSS',
    part:'Course 201',
    subpart:'An Advance Guide to HTML & CSS'
  }

// Array where we are going to do CRUD operations    
//myItems: MyItems[] = new Array();    
    
// Other variables    
//IsForUpdate: boolean = false;    
//newItem: any = {};    


  constructor() {

    // this.myItems.push(    
    //   new MyItems("A Practicle Guide to"),    
    //   new MyItems("HTML & CSS"),    
    //   new MyItems("Learn how to build beutiful and intuitive websites.")    
    // );    

   }

  ngOnInit(): void {
  }

}
