import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  @Output() emitQuotes=new EventEmitter<Quote>();
  quoteId:number
  quoteName:string
  quoteDescription:string
  quoteAuthor:string
  quoteDate:Date;
  quoteLikes:number;
  quoteDislikes:number;
  newQuote:any
  
  
  submitQuotes(){
    this.newQuote=new Quote (this.quoteId ,this.quoteName,this.quoteDescription,this.quoteAuthor, this.quoteDate, this.quoteLikes,this.quoteDislikes);
    
    this.quoteName=''
    this.quoteDescription=''
    this.quoteAuthor=''
    this.quoteLikes=0
    this.quoteDislikes=0
    this.emitQuotes.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
