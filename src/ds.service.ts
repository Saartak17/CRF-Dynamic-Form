import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DsService {

  constructor(private httpClient: HttpClient) { }

  getJson():any {
   return this.httpClient.get('http://localhost:1337/api/ref-data/sic')
 }
}
