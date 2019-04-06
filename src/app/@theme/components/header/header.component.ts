import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {AuthStoreService} from "../../../@auth/ngxs/auth-store.service";
import {CustomAuthService} from "../../../@auth/auth.service";
import {EventService} from "../../../event.service";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  showProgressbar
  currentIntervalRef
  progressVal = 0
  myAuthStoreService = AuthStoreService;
  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private customAuthService: CustomAuthService,
              private authService: NbAuthService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
        // @ts-ignore

          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
        }

      });
  }

  ngOnInit() {
    this.initializeProgressBarSubscription();
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);

  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  getInitials(name): string {
    if (name) {
      const names = name.split(' ');
      return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
    }
    return '';
  }

  logout(){
    this.customAuthService.logout()
  }

  initializeProgressBarSubscription() {
    EventService.progressBar$.subscribe(({loading, value}) => {

      if (loading) {/*if loading = true, slowly increase progressbar*/
        this.showProgressbar = true;
        this.currentIntervalRef && clearInterval(this.currentIntervalRef);
        this.progressVal = value;
        // this.progressVal = 0;
        this.currentIntervalRef = setInterval(() => {
          if (this.progressVal < 80) {
            ++this.progressVal;
          } else {
            this.progressVal = this.progressVal + 0.2;
          }
        }, 300);
      } else {
        setTimeout(() => {
          this.progressVal = 100;
          this.currentIntervalRef && clearInterval(this.currentIntervalRef);
          setTimeout(() => {
            this.showProgressbar = false;
          }, 500);
        }, 0);
      }
    });
  }
}
