import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {BaseService} from '../base.services';
import {Observable} from 'rxjs';
import {ApiResult} from '../model/api-result';
import {City, District} from '../model/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService extends BaseService {
  API_URL_PUBLISH = environment.apiPublish + '/address';
  getCities(): Observable<ApiResult<City[]>> {
    return this.httpClient.get(this.API_URL_PUBLISH + "/cities").pipe(
      map(x => {
        return x as ApiResult<City[]>
      })
    )
  }
  getDistricts(id: number): Observable<ApiResult<District[]>> {
    return this.httpClient.get(`${this.API_URL_PUBLISH}?ct-id=${id}`).pipe(
      map(x => {
        return x as ApiResult<District[]>
      })
    )
  }
}
