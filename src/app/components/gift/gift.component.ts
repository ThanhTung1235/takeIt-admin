import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gift, GiftResponse } from 'src/app/model/gift';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  @Input() gift: GiftResponse;
  @Output() confirm = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  confirmGift(giftId) {
    this.confirm.emit(giftId);
  }
  deleteGift(giftId) {
    this.delete.emit(giftId);
  }
}
