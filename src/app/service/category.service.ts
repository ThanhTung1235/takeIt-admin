import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import {BaseService} from '../base.services';
import {ApiResult} from '../model/api-result';
import {Category} from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {
  API_URL = environment.apiPublish + '/products/categories';

  getAll(): Observable<ApiResult<Category[]>> {
    return this.httpClient.get(this.API_URL, { headers: this.addRequestHeader }).pipe(
      map(x => {
        console.log(x)
        return x as ApiResult<Category[]>;
      })
    );
  }
}
