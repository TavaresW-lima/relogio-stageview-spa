import { NgModule } from '@angular/core';
import { TimePickerModule } from './time-picker/time-picker.module';

@NgModule({
    imports: [
        TimePickerModule
    ],
    exports: [
        TimePickerModule
    ]
})
export class UiComponentsModule {

}