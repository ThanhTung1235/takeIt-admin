import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { GiftService } from 'src/app/service/gift.service';
import { Observable } from 'rxjs';
import { GiftResponse } from 'src/app/model/gift';
import { map } from 'rxjs/operators';
import { Pagination } from 'src/app/model/api-result';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gift$: Observable<GiftResponse[]>;
  test = "";
  gift: GiftResponse;
  pagination: Pagination;
  constructor(
    private toastService: ToastrService,
    private route: Router,
    private giftService: GiftService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem('_token'));
    this.gift$ = this.giftService.search('', '', '', '', '','','','').pipe(map(x => {
      this.pagination = x.pagination;
      return x.data;
    }));
  }
  confirm(giftId) {
    let status = true;
    this.giftService.confirm(giftId, status).subscribe(
      x => {
        if (x.status == 200) {
          this.toastService.success('Duyệt bài thành công!', '', {
            timeOut: 5000
          });
          setInterval(function () {
            window.location.reload()
          }, 3000)
        } else {
          this.toastService.error(x.message, '', {
            timeOut: 5000
          })
        }
      }
    )
  }
  delete(giftId) {
    this.giftService.delete(giftId).subscribe(
      x => {
        if (x.status == 200) {
          this.toastService.success('Xóa bài thành công!', '', {
            timeOut: 5000
          });
          setInterval(function () {
            window.location.reload()
          }, 3000)
        } else {
          this.toastService.error(x.message, '', {
            timeOut: 5000
          })
        }
      }
    )
  }

  detail(gId) {
    this.giftService.getGift(gId).subscribe(x => this.gift = x.data);
  }
  pageChange(event) {
    console.log(event);
    let pageIndex = event;
    this.activeRoute.queryParams.subscribe(
      x => {
        const city = x.city;
        const district = x.district;
        const gender = x.gender;
        const age = x.age;
        const cate = x.cate;
        // console.log(city + " - " + district + " - gender: " + gender + " - age:" + age);
        this.gift$ = this.giftService.search(city, district, gender, age, cate, pageIndex, '', '').pipe(
          map(x => {
            this.pagination = x.pagination;
            return x.data;
          })
        );
      }
    );
  }
}
