import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  toggleDescription(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
quotes:Quote[]=[
  new Quote(1, 'Joy','Any fool can write code that a computer can understand. Good programmers write code that humans can understand.','Martin Fowler', new Date("2020,7,24"),0,0 ),
  new Quote(2,'Amalia', 'First, solve the problem. Then, write the code.','John Johnson', new Date("2020,5,15"),0,0 ),
  new Quote(3,'Jemmy','In order to be irreplaceable, one must always be different','Coco Chanel', new Date("2021,1,14"),0,0 ),
  new Quote(4,'Avatar','Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Mondays code.','Dan Salomon', new Date("2022,4,9"),0,0 ),
];
 
// addNewQuotes(quote:Quote) {
//   this.quotes.push(quote);
// }

addQuote(item:Quote){
  this.quotes.push(item)

}


// addNewQuote(userquote: Quotedetails){
//   let quoteLength = this.userquote.length;
//   userquote.id = quoteLength+1;
//   this.userquote.push(userquote);
  // userquote.additionDate = new Date(userquote.additionDate)
// };

  addNewQuote(quotes){
   let quoteLength = this.quotes.length;
  quotes.id = quoteLength+1;
  // quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quotes)
   }
  // quoteDelete(isRead, index){
  //   if (isRead) {
  //     let toDelete = confirm(`Are you sure you want to delete this Quote?`)
  //     if(toDelete){
  //       this.quotes.splice(index,1);
  //     }
      
  //   }
  // }
 
  // displayInfo(index){
  //   this.quotes[index].showDescription= !this.quotes[index].showDescription;
  //  }

  constructor() { }

  ngOnInit(): void {
  }

}
