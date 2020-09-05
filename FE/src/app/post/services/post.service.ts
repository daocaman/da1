import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  path = 'job';

  endpoints = {
    create: 'create',
  }

  constructor(
    private _api : ApiService
  ) { }

  create(data: any){
    return this._api.post(this.path, this.endpoints.create, data);
  }
}
