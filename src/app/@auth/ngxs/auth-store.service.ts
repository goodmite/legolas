import { Injectable } from '@angular/core';
import {IUser} from "../../interface";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {IAuthState} from "./state";
import {take, takeWhile} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {/*A facade service for loggedinuser store*/

  @Select() static loggeduser$: Observable<IAuthState>;

  static user: IUser;
  static init(){
    this.loggeduser$
      .subscribe((val:{user:IUser})=>{
        AuthStoreService.user = val.user;
      })
  }
}
