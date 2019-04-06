import {EventEmitter, Injectable} from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  static progressBar$ = new EventEmitter<{loading: boolean, value: number }>();

}
