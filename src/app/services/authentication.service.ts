import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getRoles(): string[]{
    if(sessionStorage.getItem('token')){
      return JSON.parse(atob(sessionStorage.getItem('token').split('.')[1])).roles;
    }else {
      return [];
    }
  }

  isLoggedIn(): boolean{
    return !!sessionStorage.getItem('token');

  }

  setToken(token: string){
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string{
    return JSON.parse(sessionStorage.getItem('token'));
  }

  hasRole(role: string): boolean{
    return this.getRoles().indexOf(role) != -1;
  }

  hasAnyRole(...roles: string[]): boolean{
    return this.getRoles().some(role => roles.indexOf(role) >= 0);
  }

  logout() {
    sessionStorage.removeItem('token');
  }
  getUsername(){
    return JSON.parse(atob(sessionStorage.getItem('token').split('.')[1])).name;
  }


}
