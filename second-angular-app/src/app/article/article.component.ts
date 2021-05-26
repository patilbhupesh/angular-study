import { ParseErrorLevel } from '@angular/compiler';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  artipage={
    title: 'Learn how to build beautiful & intuitive websites.',
    Content:'A Practicle Giude to HTML & CSS has one goal- to teach people how to build beautiful and intuitive wesites by way of clear and organized lessons. The guide covers varity of topics within web design and development, ranging from biginner to advance skill levels.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
