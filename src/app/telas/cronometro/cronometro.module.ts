import { SharedModule } from './../../base/shared.module';
import { CronometroComponent } from './cronometro.component';
import { NgModule } from "@angular/core";
import { UiComponentsModule } from '../../components/ui-components.module';
import { ChronometerTimePickerModalComponent } from './time-picker-modal/time-picker-modal.component';

@NgModule({
  declarations: [
    CronometroComponent,
    ChronometerTimePickerModalComponent
  ],
  imports: [
    SharedModule,
    UiComponentsModule
  ]
})
export class CronometroModule {

}
