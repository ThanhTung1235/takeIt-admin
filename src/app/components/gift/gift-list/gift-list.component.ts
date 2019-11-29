import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GiftService} from '../../../service/gift.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {GiftResponse} from '../../../model/gift';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  gift$: Observable<GiftResponse[]>;

  constructor(private route: Router,
              private giftService: GiftService) {
  }

  ngOnInit() {
    this.gift$ = this.giftService.getList().pipe(map(x => x.data));
  }
}
