import { Injectable } from '@angular/core';
import {ServerService} from "../server.service";
import {UrlService} from "../url.service";
import {ILoginFormData} from "../interface";
import {AppService} from "../app.service";

@Injectable({
  providedIn: 'root'
})
export class CustomAuthService {

  constructor(private serverService:ServerService) { }

  login(loginData:ILoginFormData){
    let loginUrl = UrlService.adminLoginUrl;
    let headerData = {
      'api-key': AppService.API_KEY
    };
    return this.serverService.makePostReq({url:loginUrl, body: loginData, headerData: headerData})
  }


}
