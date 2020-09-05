import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  path = "job";

  endpoints = {
    list: 'list'
  }

  constructor(
    private _api: ApiService
  ) { }

  getAll(data: any){
    return this._api.post(this.path,this.endpoints.list, data);
  }

  getJob(id: any){
    var endpoint1 = this.endpoints.list + "/"+id;
    return this._api.get(this.path, endpoint1);
  }
}
