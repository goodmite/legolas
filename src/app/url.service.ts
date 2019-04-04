import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }
  private static readonly BACKEND_URL = environment.backend_root;


  /*login*/
  static get adminLoginUrl(){
    return UrlService.BACKEND_URL + '/api/v1/login/admin/';
  }
}
