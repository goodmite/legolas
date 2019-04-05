import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {Url} from "url";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() {
  }

  private static readonly BACKEND_URL = environment.backend_root;


  /*login*/
  static get adminLoginUrl() {
    return UrlService.BACKEND_URL + '/api/v1/login/user/';
  }


  /*Environments*/
  static getAllEnvironmentsUrl() {
    return UrlService.BACKEND_URL + '/api/v1/environment';
  }

  static createEnvironmentUrl() {
    return UrlService.getAllEnvironmentsUrl();
  }

  static getEnvironmentByIdUrl(id:string) {
    return this.updateEnvironmentUrl(id);
  }

  static updateEnvironmentUrl(id:string) {
    return UrlService.BACKEND_URL + `/api/v1/environment/${id}`;
  }

  static deleteEnvironmentUrl(id:string) {
    return UrlService.updateEnvironmentUrl(id);
  }


  /*Node
 s*/
  static getAllNodesUrl() {
    return UrlService.BACKEND_URL + '/api/v1/node';
  }

  static createNodeUrl() {
    return UrlService.getAllNodesUrl();
  }

  static getNodeByIdUrl(id:string) {
    return this.updateNodeUrl(id);
  }

  static updateNodeUrl(id:string) {
    return UrlService.BACKEND_URL + `/api/v1/node/${id}`;
  }

  static deleteNodeUrl(id:string) {
    return UrlService.updateNodeUrl(id);
  }











}
