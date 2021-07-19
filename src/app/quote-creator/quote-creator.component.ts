import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-creator',
  templateUrl: './quote-creator.component.html',
  styleUrls: ['./quote-creator.component.css']
})
export class QuoteCreatorComponent implements OnInit {
  quoteCreator:Quote[] = [
    new Quote('Fred', 'Mahatma', 'Be yourself; everyone else is already taken.')
  ]

  submitQuote(val:any){
    this.quoteCreator.push(new Quote(val.name, val.author, val.quotemsg))
  }
  constructor() { }

  ngOnInit(): void {
  }

}
