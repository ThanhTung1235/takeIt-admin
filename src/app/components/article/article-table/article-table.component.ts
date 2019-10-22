import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article, ArticleStatus } from 'src/app/models/article';

@Component({
  selector: 'article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})
export class ArticleTableComponent implements OnInit {
  @Input() articles: Article[];
  @Input() _currentPage: number;
  @Input() _pageSize: number;
  @Output() deleteItem = new EventEmitter();
  @Output() editItem = new EventEmitter();
  @Output() infoItem = new EventEmitter();
  @Output() checkAll = new EventEmitter();
  @Output() checkItem = new EventEmitter();
  sort = true;
  selectedAll: any;
  checkedItem: any;
  list_article: Article[] = [];
  constructor() {

  }
  edit(aritcle: Article) {
    this.editItem.emit(aritcle);
  }
  info(aritcle: Article) {
    this.infoItem.emit(aritcle);
  }
  delete(aritcle: Article) {
    var index = this.articles.indexOf(aritcle);
    if (index > -1) {
      this.articles.splice(index, 1);
    }
    this.deleteItem.emit(aritcle.link);
  }
  get sortDataDESC() {
    var article = this.articles;
    if (article == null) return article = [];
    else {
      return article.sort((a, b) => {
        return <any>new Date(b.createdAtMLS) - <any>new Date(a.createdAtMLS);
      });
    }

  }
  get sortDataASC() {
    return this.articles.sort((a, b) => {
      return <any>new Date(a.createdAtMLS) - <any>new Date(b.createdAtMLS);
    });
  }
  selectAll() {
    this.selectedAll = !this.selectedAll;
    if (this.selectedAll) {
      for (let i = 0; i < this.articles.length; i++) {
        this.articles[i].status = 1;
      }
    } else {
      for (let i = 0; i < this.articles.length; i++) {
        this.articles[i].status = 0;
      }
      return;
    }
    console.log(this.articles);
    this.checkAll.emit(this.articles);

  }
  checkIfAllSelected(aritcle: Article) {
    if (aritcle.status == 1) {
      aritcle.status = 1;
      this.list_article.push(aritcle);
    } else {
      aritcle.status = 0;
      var index = this.list_article.indexOf(aritcle);
      if (index > -1) {
        this.list_article.splice(index, 1);
      }
    }

  }
  changeSort() {
    if (this.sort) this.sort = false;
    else this.sort = true;
  }
  changeStatus() {
    console.log(this.list_article);
    this.checkItem.emit(this.list_article);
  }
  ngOnInit() {

  }

}
