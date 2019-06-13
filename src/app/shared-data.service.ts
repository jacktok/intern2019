import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  textShared: string = '';
  constructor(private http: HttpClient) {
  }

  getData(): Observable<User[]> {
    const data =  this.http.get<User[]>('/assets/data.json')
    return data
  }
}
