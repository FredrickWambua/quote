import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-creator',
  templateUrl: './quote-creator.component.html',
  styleUrls: ['./quote-creator.component.css']
})
export class QuoteCreatorComponent implements OnInit {
  quoteCreator:Quote[] = [
    new Quote('Fred', 'Mahatma', 'Be yourself; everyone else is already taken.', new Date(2021,7,19), 0,0)
  ]

  submitQuote(val:any){
    this.quoteCreator.push(new Quote(val.name, val.author, val.quotemsg, val.dateposted, val.like, val.dislike))
  }
  constructor() { }

  ngOnInit(): void {
  }

}
