import { Component, OnInit } from '@angular/core';
import {NbAuthResult, NbAuthService} from "@nebular/auth";
import {takeWhile} from "rxjs-compat/operator/takeWhile";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent {

  alive = true;

  constructor(private authService: NbAuthService, private router: Router) {
    // this.authService.authenticate('google')
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((authResult: NbAuthResult) => {
    //     if (authResult.isSuccess() && authResult.getRedirect()) {
    //       this.router.navigateByUrl(authResult.getRedirect());
    //     }
    //   });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
