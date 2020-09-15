import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestTableService {

  endpoint = 'http://localhost:3800/table/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  httpOptionsAuth ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUser')
    })
  }

  constructor(private http: HttpClient) { }

  private extratData(res:Response){
    const body = res;
    return body || [] || {}
  }

  getTables():Observable<any>{
    return this.http.get(this.endpoint + 'viewTables', this.httpOptionsAuth ).pipe
      (map(this.extratData));
  }
}

