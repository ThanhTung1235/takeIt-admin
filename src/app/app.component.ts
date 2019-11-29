import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crawler';
  showFormLogin: boolean;
  constructor() { }
  ngOnInit() {
    let token = localStorage.getItem('_token');
    if (token == null) {
      this.showFormLogin = true;
    } else {
      this.showFormLogin = false;
    }
  }
}
