import { Component, OnInit,Input, Output, EventEmitter,  } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  upvote(index:number){
    this.quote[index].likes++;
  }
  
//    @Output() isRead = new EventEmitter<boolean>();
//   deleteQuote(read:boolean){
//    this.isRead.emit(read);
//    }
//  upvote(index){
// this.quote[index].likes++;
//  }
//  downvote(index){
//  this.quote[index].dislikes++;
//  }

  constructor() { }

  ngOnInit(): void {
  }

}
