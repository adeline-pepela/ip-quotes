import { Component, OnInit,Input, Output, EventEmitter, } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }

  // deleteQuotes(isComplete, index) {
  //   if (isComplete) {
  //     let toDelete = confirm(`Delete the Quote, ${this.quote[index].text} ?`);
  //     if (toDelete) {
  //       this.quote.splice(index, 1);
  //     }
  //   }
  // }

  upvote(){
    this.quote.likes+=1;
  }
  downvote(){
    this.quote.dislikes+=1;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
