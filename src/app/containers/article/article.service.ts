import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { ApiResult } from 'src/app/models/api-result';
import { BaseService } from 'src/app/base.services';


@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseService {
  CONST_API_URL = environment.apiHost + "/admin/_api/article";

  getList(): Observable<ApiResult<Article[]>> {
    return this.http.get(this.CONST_API_URL, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<Article[]>;
      })
    )
  }
  delete(link: string): Observable<ApiResult<any>> {
    console.log(`${this.CONST_API_URL}?id=${link}`);
    return this.http.delete(`${this.CONST_API_URL}?id=${link}`, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<any>;
      })
    )
  }
  update(article: Article): Observable<ApiResult<any>> {
    return this.http.put(`${this.CONST_API_URL}?id=${article.link}`, article, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<any>;
      })
    )
  }

}
