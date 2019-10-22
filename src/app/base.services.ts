import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class BaseService {
    constructor(
        protected http: HttpClient
    ) { }
    get addRequestHeader() {
        return this.requestHeaders();
    }
    private requestHeaders() {
        let storage = localStorage.getItem("token");
        let token = '';
        if (!storage) return null;
        token = storage;
        return new HttpHeaders({
            'Authorization': 'Bearer ' + token
        })
    }
}