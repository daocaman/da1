import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  path = "job";

  endpoints: any = {
    list: 'list',
    userList: 'list/user',
  };

  constructor(
    private _api : ApiService
  ) { }

  getAll(data: any){
    return this._api.post(this.path,this.endpoints.list, data);
  }
}
