import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IHeaderData} from "./interface";
import {catchError, tap} from "rxjs/operators";
import {AuthStoreService} from "./@auth/ngxs/auth-store.service";
import {EventService} from "./event.service";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient: HttpClient,) {
  }


  preHttp(){
    EventService.progressBar$.emit({loading:true, value:0});
  }

  postHttp(data?:{error:any}){
    EventService.progressBar$.emit({loading:false, value:100});
    let message = data && data.error && data.error.error;
    if(message){
      alert(message)
    }
  }


  createHeaders(headerData?: any): HttpHeaders {
    let headers = new HttpHeaders();
    let tokenData: IHeaderData = {};
    tokenData = {'x-access-token': AuthStoreService.user && AuthStoreService.user.token};
    // tokenData = {...tokenData, 'auth-token': this.AUTH_TOKEN};
    tokenData = {...tokenData, 'content-type': 'application/json'};

    headerData = {
      ...tokenData,
      ...headerData,
    };

    if (headerData) {
      for (const key in headerData) {
        /*don't set header data for undefined values*/
        headerData[key] && (headers = headers.set(key, headerData[key]));
      }
    }
    return headers;
  }


  makeGetReq<T>(reqObj: { url: string, headerData?: any, noValidateUser?: boolean }): Observable<any> {
    this.preHttp();
    const headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.get<T>(reqObj.url, {headers: headers})
      .pipe(tap(()=>{
        this.postHttp();
      },(error)=>{
        this.postHttp({error:error});
      }))
  }

  makePostReq<T>(reqObj: { url: string, body: any, headerData?: any, dontShowProgressBar?: boolean, noValidateUser?: boolean }): Observable<any> {
    this.preHttp();
    const headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.post<T>(reqObj.url, reqObj.body, {headers: headers})
      .pipe(tap(()=>{
        this.postHttp();
      },(error)=>{
        this.postHttp({error:error});
      }))
  }

  makePutReq<T>(reqObj: { url: string, body: any, headerData?: any, dontShowProgressBar?: boolean, noValidateUser?: boolean }): Observable<any> {
    this.preHttp();
    const headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.put<T>(reqObj.url, reqObj.body, {headers: headers})
      .pipe(tap(()=>{
        this.postHttp();
      },(error)=>{
        this.postHttp({error:error});
      }))
  }

  makeDeleteReq<T>(reqObj: { url: string, headerData?: any, noValidateUser?: boolean }): Observable<any> {
    this.preHttp();
    const headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.delete<T>(reqObj.url, {headers: headers})
      .pipe(tap(()=>{
        this.postHttp();
      },(error)=>{
        this.postHttp({error:error});
      }))
  }

}
