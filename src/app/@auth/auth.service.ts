import { Injectable } from '@angular/core';
import {ServerService} from "../server.service";
import {UrlService} from "../url.service";
import {ILoginFormData} from "../interface";
import {AppService} from "../app.service";
import {Store} from "@ngxs/store";
import {ResetAuthToDefaultState} from "./ngxs/actions";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomAuthService {

  constructor(private serverService:ServerService, private store: Store, private router: Router) { }

  login(loginData:ILoginFormData){
    let loginUrl = UrlService.adminLoginUrl;
    let headerData = {
      'api-key': AppService.API_KEY
    };
    return this.serverService.makePostReq({url:loginUrl, body: loginData, headerData: headerData})
  }

  logout(){
    this.store.dispatch(new ResetAuthToDefaultState());
    this.router.navigate(['/login']);
  }


}
