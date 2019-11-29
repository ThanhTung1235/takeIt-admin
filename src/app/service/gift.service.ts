import { environment } from 'src/environments/environment.prod';
import { BaseService } from 'src/app/base.services';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResult } from '../model/api-result';
import { Gift, GiftResponse } from '../model/gift';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class GiftService extends BaseService {
  API_URL_STAF = 'http://localhost:8080/_api/admin/gifts';


  search(city, district, gender, age, cate, page, limit, keyword): Observable<ApiResult<GiftResponse[]>> {
    if (city === undefined) {
      city = '';
    }
    if (district === undefined) {
      district = '';
    }
    if (gender === undefined) {
      gender = 0;
    }
    if (age === undefined) {
      age = 0;
    }
    if (cate === undefined) {
      cate = '';
    }
    if (page === undefined) {
      page = "";
    }
    if (limit === undefined) {
      limit = "";
    }
    if (keyword === undefined) {
      keyword = "";
    }
    console.log("service:");
    return this.httpClient.get(`${this.API_URL_STAF}?city=${city}&district=${district}&gender=${gender}&cate=${cate}&age=${age}&page=${page}&limit=${limit}&keyword=${keyword}`, {headers: this.addRequestHeader}).pipe(
      map(x => {
        return x as ApiResult<GiftResponse[]>;
      })
    );
  }


  saveGift(gift: Gift): Observable<ApiResult<Gift>> {
    return this.httpClient.post(this.API_URL_STAF + '/create', gift, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<Gift>;
      })
    );
  }

  getGift(id: number): Observable<ApiResult<GiftResponse>> {
    return this.httpClient.get(`${this.API_URL_STAF}/detail/${id}`, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<GiftResponse>;
      })
    );
  }
  delete(id: number): Observable<ApiResult<GiftResponse>> {
    return this.httpClient.delete(`${this.API_URL_STAF}/${id}`, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<GiftResponse>;
      })
    );
  }
  confirm(id: number, status): Observable<ApiResult<GiftResponse>> {
    return this.httpClient.get(`${this.API_URL_STAF}/${id}?status=${status}`, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<GiftResponse>;
      })
    );
  }
}
