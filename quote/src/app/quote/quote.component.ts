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
  {id:3,name:"Coco Chanel" , description: "In order to be irreplaceable, one must always be different"},
  {id:4,name:"Chris Heilmann" , description: "“Java is to JavaScript what car is to Carpet.” "},
  {id:5,name:"Dan Salomon" , description:"“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”"},
  {id:6,name:"Kent Beck", description:"“Make it work, make it right, make it fast.” "},
]
  constructor() { }

  ngOnInit(): void {
  }

}
