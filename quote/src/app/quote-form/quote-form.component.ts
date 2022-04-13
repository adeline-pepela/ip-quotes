import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote= new Quote(0, "","","",new Date(),0,0 )
  @Output() addQuotesEvent=new EventEmitter<Quote>();
  quoteSubmit(form:NgForm){
    let formData=form.value;
    let newDate= new Date(formData.date);
    formData.date=newDate;
    formData.likes=0;
    formData.dislikes=0;
    this.addQuotesEvent.emit(formData)
    console.log(formData)
  }
  constructor() { }

   ngOnInit(): void {
  }

}
