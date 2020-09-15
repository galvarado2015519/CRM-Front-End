import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class RestService {

  endpoint = 'http://localhost:3800/user/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor( private http: HttpClient) {

  }

  saveUser(userData){
    let params = JSON.stringify(userData);
    return this.http.post(this.endpoint, params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }

  login(userData){
    let params = JSON.stringify(userData);
    return this.http.post(this.endpoint + 'login', params, this.httpOptions).pipe(
      map(this.extractData)
    )   
  }
}