import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
