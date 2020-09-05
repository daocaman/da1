import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  path = 'job';

  endpoints = {
    create: 'create',
    listUser: 'list/user/{{0}}',
    delete: 'delete/{{0}}',
    item: 'list/{{0}}',
    update: 'update',
    list: 'list'
  }

  constructor(
    private _api : ApiService
  ) { }

  create(data: any){
    return this._api.post(this.path, this.endpoints.create, data);
  }

  getAll(data: any){
    return this._api.post(this.path,this.endpoints.list, data);
  }
  
  getPost(idUser, data){
    return this._api.post(this.path, this.endpoints.listUser.replace("{{0}}", idUser), data);
  }

  getPostID(id){
    return this._api.get(this.path, this.endpoints.item.replace("{{0}}", id));
  }

  updateID(data){
    return this._api.put(this.path, this.endpoints.update, data);
  }

  delete(idJobs){
    return this._api.delete(this.path, this.endpoints.delete.replace("{{0}}", idJobs));
  }
}
