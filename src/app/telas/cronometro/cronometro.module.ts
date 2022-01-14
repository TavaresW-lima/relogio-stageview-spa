import { SharedModule } from './../../base/shared.module';
import { CronometroComponent } from './cronometro.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CronometroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CronometroModule {

}
