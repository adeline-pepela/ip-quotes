import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  {id:1,name:"Martin Fowler" , description:"“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”"},
  {id:2,name:"John Johnson " , description: "“First, solve the problem. Then, write the code.” "},
]
  constructor() { }

  ngOnInit(): void {
  }

}
