import { Component, OnInit } from '@angular/core';

import {GiftService} from '../../../service/gift.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Gift, GiftResponse} from '../../../model/gift';
import {City, District} from '../../../model/address';
import {Category} from '../../../model/category';
import {Account} from '../../../model/account';
import {ExchangeRequest, ExchangeRequestResp} from '../../../model/exchange-request';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  gifts$: Observable<GiftResponse[]>;

  gift: GiftResponse;
  state: string;
  sub: Subscription;
  account = new Account(0, '', '', '');
  city: City;
  district: District;
  cate: Category;
  giftP = new Gift(0, '', '', '', 0, 0, '', this.city, this.district, this.account, this.cate);
  giftId: number;
  exchange = new ExchangeRequest('', this.giftP);
  exchangeResp: ExchangeRequestResp[];
  showRequest: boolean;
  cateName: string;

  constructor(
    private giftService: GiftService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.showRequest = true;
    this.giftId = +this.route.snapshot.paramMap.get('id');
    this.sub = this.giftService.getGift(this.giftId).subscribe(
      x => {
        this.gift = x.data;
        this.giftP.account.id = x.data.accountId;
        this.giftP.thumbnail = x.data.thumbnail[0];
        this.cateName = x.data.categoryName;
      }
    );
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
