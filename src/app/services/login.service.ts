import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) { }

  public login(loginData): Observable<any>{
     return this.apiService.postSingle('login', loginData);
  }

}
