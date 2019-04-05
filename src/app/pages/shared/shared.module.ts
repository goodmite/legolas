import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplashScreenComponent} from "../applications/splash-screen/splash-screen.component";

@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  exports:[
    SplashScreenComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class SharedModule { }
