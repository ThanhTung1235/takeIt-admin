import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  test = "";
  constructor(
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.toastService.error('everything is broken', 'Major Error', {
      timeOut: 2000
    });
  }

}
