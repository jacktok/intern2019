import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  OnClick() {
    this.clicked.emit(this.data + " | ----");
  }
}
