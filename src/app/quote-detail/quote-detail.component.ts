import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Output() isRead = new EventEmitter<boolean>()
  quoteDelete(read:boolean){
     this.isRead.emit(read);
   }
  
  upVote = 0;
  like(){
    this.upVote ++
  }
  
  downVote = 0;
  dislike(){
    this.downVote++
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
