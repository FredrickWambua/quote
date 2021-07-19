import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onsubmit = new EventEmitter()

  submit(val:any){
    this.onsubmit.emit(val)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
