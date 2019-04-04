import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbAuthOAuth2Token, NbAuthResult, NbAuthService} from "@nebular/auth";
import {catchError, finalize, switchMap, takeWhile, tap} from "rxjs/operators";
import {ILoginFormData, IUser} from "../../interface";
import {CustomAuthService} from "../auth.service";
import {Store} from "@ngxs/store";
import {SetUser} from "../ngxs/actions";
import {Router} from "@angular/router";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthStoreService} from "../ngxs/auth-store.service";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading: boolean = false;
  message: string;

  constructor(private authService: CustomAuthService, private store: Store, private router: Router) {}

  loginHandler(loginFormData: ILoginFormData) {
    if (!loginFormData) throw 'no login data';
    this.loading = true;
    this.message = 'Connecting to server';
    this.authService.login(loginFormData)
      .pipe(finalize(() => {
          this.loading = false;
        }),
        switchMap((userData: IUser) => {
          AuthStoreService.user = userData;
          return this.store.dispatch(new SetUser({user: userData}));
        }),
        tap(() => {
          this.router.navigate(['/pages/dashboard']);
        }),
        catchError((err: HttpErrorResponse) => {
          let messageFromServer = err && err.error && err.error.message;
          this.message = messageFromServer  || "Some error occurred. Please try again";
          return of(1)
        }),
      )
      .subscribe()

  }

}
