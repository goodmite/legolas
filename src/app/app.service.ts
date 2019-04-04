import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public static readonly API_KEY = environment.API_KEY;
}
