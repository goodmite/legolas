import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { OutputFormComponent } from './app-detail/output-form/output-form.component';
import {SharedModule} from "./shared/shared.module";
import {ApplicationModule} from "./applications/application.module";
import { LegoButtonComponent } from './lego-button/lego-button.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    DashboardModule,
    ApplicationModule,
    MiscellaneousModule,
    ThemeModule,
    SharedModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    AppDetailComponent,
    OutputFormComponent,
    LegoButtonComponent,
  ],
  exports:[

  ]
})
export class PagesModule {
}
