import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleTableComponent } from 'src/app/components/article/article-table/article-table.component';
import { ArticleService } from '../article.service';
import { SharedPipeModule } from 'src/app/core/pipe/shared-pipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogFormModule } from 'src/app/components/form/dialog-form/dialog-form.module';
import { DialogAritcleInfoModule } from 'src/app/components/article/dialog-aritcle-info/dialog-aritcle-info.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';


const route: Routes = [
  {
    path: '', component: ArticleListComponent,
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedPipeModule,
    NgbModule,
    NgxPaginationModule,
    DialogFormModule,
    DialogAritcleInfoModule,
    SweetAlert2Module,
    FormsModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleTableComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleTableComponent,
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleListModule { }
