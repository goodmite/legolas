import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedRouterService {
  static data:{[index:string]:any} = {};
}