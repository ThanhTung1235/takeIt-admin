import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from 'src/app/models/article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogFormComponent } from 'src/app/components/form/dialog-form/dialog-form.component';
import { DialogAritcleInfoComponent } from 'src/app/components/article/dialog-aritcle-info/dialog-aritcle-info.component';
import { ToastrService } from 'ngx-toastr';
import { ApiResult } from 'src/app/models/api-result';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  article$: Observable<Article[]>;
  p: number = 1;
  pageSize: number = 30;
  apiResult: ApiResult<any>;

  constructor(
    private articleService: ArticleService,
    private modalService: NgbModal,
    private toastService: ToastrService
  ) { }

  getArticle() {
    this.article$ = this.articleService.getList().pipe(
      map(response => { return response.data })
    );
  }
  loadPage(event) {
    this.p = event;
  }
  editItem(article: Article) {
    this.modalService.open(DialogFormComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

  }
  infoItem(article: Article) {
    const ref = this.modalService.open(DialogAritcleInfoComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });
    ref.componentInstance.a = article;
  }
  deleteItem(link: string) {
    this.articleService.delete(link).subscribe();

  }
  checkItem(aritcles: Article[]) {
    aritcles.forEach(ar => {
      this.articleService.update(ar).subscribe(x => this.apiResult = x);
    });

  }
  ngOnInit() {
    this.getArticle();

  }

}
