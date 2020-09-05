import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path = 'user';

  endpoints = {
    login: 'login',
    create: 'create'
  }
  
  constructor(
    private _api: ApiService
  ) { }

  login(data){
    return this._api.post(this.path, this.endpoints.login, data);
  }

  create(data){
    return this._api.post(this.path, this.endpoints.create, data);
  }
}
