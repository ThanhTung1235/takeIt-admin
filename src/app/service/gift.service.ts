import { environment } from 'src/environments/environment.prod';
import { BaseService } from 'src/app/base.services';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiResult} from '../model/api-result';
import {Gift, GiftResponse} from '../model/gift';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class GiftService extends BaseService {
  API_URL_PUBLIC = environment.apiPublish + '/products';
  API_URL_STAF = environment.apiPublish + '/products';


  search(city, district, gender, age, cate): Observable<ApiResult<GiftResponse[]>> {
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
    return this.httpClient.get(`${this.API_URL_PUBLIC}?city=${city}&district=${district}&gender=${gender}&age=${age}&cate=${cate}`).pipe(
      map(x => {
        return x as ApiResult<GiftResponse[]>;
      })
    );
  }


  saveGift(gift: Gift): Observable<ApiResult<Gift>> {
    return this.httpClient.post(this.API_URL_PUBLIC + '/create', gift, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<Gift>;
      })
    );
  }

  getGift(id: number): Observable<ApiResult<GiftResponse>> {
    return this.httpClient.get(`${this.API_URL_PUBLIC}/${id}`, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<GiftResponse>;
      })
    );
  }
  getList(): Observable<ApiResult<GiftResponse[]>> {
    return this.httpClient.get(this.API_URL_PUBLIC, { headers: this.addRequestHeader }).pipe(
      map(x => {
        console.log(x);
        return x as ApiResult<GiftResponse[]>;
      })
    );
  }
  delete(link: string): Observable<ApiResult<any>> {
    console.log(`${this.API_URL_PUBLIC}?id=${link}`);
    return this.httpClient.delete(`${this.API_URL_PUBLIC}?id=${link}`, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<any>;
      })
    );
  }
  /*update(giftRespone: GiftResponse): Observable<ApiResult<any>> {
    return this.httpClient.put(`${this.API_URL_PUBLIC}?id=${giftRespone.link}`, giftRespone, { headers: this.addRequestHeader }).pipe(
      map(response => {
        return response as ApiResult<any>;
      })
    );
  }*/

}
