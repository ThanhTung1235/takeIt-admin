import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-dialog-aritcle-info',
  templateUrl: './dialog-aritcle-info.component.html',
  styleUrls: ['./dialog-aritcle-info.component.css']
})
export class DialogAritcleInfoComponent implements OnInit {
  @Input() a: Article;
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
