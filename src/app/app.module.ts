/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@auth/login/login.component';
import { CallbackComponent } from './@auth/callback/callback.component';
import {AuthStateReducer} from "./@auth/ngxs/state";
import {NgxsModule} from "@ngxs/store";
import {NbAuthModule, NbPasswordAuthStrategy} from "@nebular/auth";
import {NbCardModule} from "@nebular/theme";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NodeStateReducer} from "./pages/dashboard/ngxs/state";
import {EnvironmentStateReducer} from "./pages/dashboard/environment/ngxs/state";
import {ApplicationStateReducer} from "./pages/applications/ngxs/state";

@NgModule({
  declarations: [AppComponent, LoginComponent, CallbackComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NgxsModule.forRoot([
      AuthStateReducer,
      EnvironmentStateReducer,
      NodeStateReducer,
      // ApplicationStateReducer
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),//Comment this before pushing to git
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://52.41.160.116',
          login: {
            endpoint: 'api/v1/login/admin/',
          },
          register: {
            endpoint: '/api/auth/register',
          },
        }),
      ],
      forms: {},
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
