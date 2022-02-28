import { NgModule } from '@angular/core';
import { TimePickerComponent } from './time-picker.component';
import { ScrollableListComponent } from '../ui-scrollable-list/scrollable-list.component';
import { SharedModule } from '../../base/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    declarations: [
        TimePickerComponent,
        ScrollableListComponent
    ],
    imports: [
        SharedModule,
        ScrollingModule
    ],
    exports: [
        TimePickerComponent
    ]
})
export class TimePickerModule {

}