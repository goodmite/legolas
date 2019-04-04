import { Injectable } from '@angular/core';
import {IUser} from "../../interface";

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {/*A facade service for loggedinuser store*/

  constructor() { }
  private static _user: IUser;
  static set user(val:IUser){
    if(val){
      throw 'Error(AuthStoreService): Something is wrong! user has already been set once but you are trying to change it again?!!!'
    }else {
      AuthStoreService._user = val;
    }
  }

  static get user(){
    return AuthStoreService._user;
  }
}
