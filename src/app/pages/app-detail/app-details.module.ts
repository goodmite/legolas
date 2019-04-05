import { NgModule } from '@angular/core';
import {ThemeModule} from "../../@theme/theme.module";
import {AppDetailComponent} from "./app-detail.component";
import {OutputFormComponent} from "./output-form/output-form.component";
import {MiscellaneousModule} from "../miscellaneous/miscellaneous.module";
import {ChartModule} from "angular2-chartjs";
import {NgxEchartsModule} from "ngx-echarts";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {ApplicationModule} from "../applications/application.module";



const PAGES_COMPONENTS = [

];
//

@NgModule({
  imports: [
    ThemeModule,
    ApplicationModule,
    MiscellaneousModule,
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    OutputFormComponent,
  ],
})
export class AppDetailsModule {
}
