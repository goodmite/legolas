import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {AuthStoreService} from "../../../@auth/ngxs/auth-store.service";
import {CustomAuthService} from "../../../@auth/auth.service";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
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
          debugger;
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
        }

      });
  }

  ngOnInit() {
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
}
