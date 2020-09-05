import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'user';

  endpoints = {
    list: 'list',
  }

  constructor(
    private _api: ApiService
  ) { }
  
  getAll(data){
    return this._api.post(this.path, this.endpoints.list, data);
  }

}
