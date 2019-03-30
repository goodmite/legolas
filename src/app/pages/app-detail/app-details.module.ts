import { NgModule } from '@angular/core';
import {ThemeModule} from "../../@theme/theme.module";
import {AppDetailComponent} from "./app-detail.component";
import {OutputFormComponent} from "./output-form/output-form.component";
import {MiscellaneousModule} from "../miscellaneous/miscellaneous.module";
import {ECommerceModule} from "../e-commerce/e-commerce.module";
import {ChartModule} from "angular2-chartjs";
import {NgxEchartsModule} from "ngx-echarts";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";



const PAGES_COMPONENTS = [

];
//

@NgModule({
  imports: [
    ThemeModule,
    ECommerceModule,
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
