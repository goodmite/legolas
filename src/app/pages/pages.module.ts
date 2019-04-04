import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { OutputFormComponent } from './app-detail/output-form/output-form.component';
import {SplashScreenComponent} from "./e-commerce/splash-screen/splash-screen.component";
import {SharedModule} from "./shared/shared.module";

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ThemeModule,
    SharedModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    AppDetailComponent,
    OutputFormComponent,
  ],
  exports:[

  ]
})
export class PagesModule {
}
