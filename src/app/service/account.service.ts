import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseService} from '../base.services';

import {Account, Credential} from '../model/account';
import {ApiResult} from '../model/api-result';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {
  API_URL = environment.apiAuth;

  register(account: Account): Observable<ApiResult<Account>> {
    return this.httpClient.post(`${this.API_URL}/register`, account).pipe(
      map(x => {
        return x as ApiResult<Account>;
      })
    );
  }

  login(account: Account): Observable<ApiResult<Credential>> {
    return this.httpClient.post(`${this.API_URL}/login`, account).pipe(
      map(x => {
        return x as ApiResult<Credential>;
      })
    );
  }
}
