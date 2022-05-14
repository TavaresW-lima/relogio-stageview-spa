import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IconService } from '../../service/base/icon/icon.service';
import { Time } from '@angular/common';
import { Listable } from '../ui-scrollable-list/listable.interface';

const MINUTE_SELECTOR_LIMIT = 59;
const HOUR_SELECTOR_LIMIT = 23;
@Component({
    selector: "app-time-picker",
    templateUrl: './time-picker.component.html',
    styleUrls: ['time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
    
    @Output() public onChange: EventEmitter<Time> = new EventEmitter<Time>();

    public hourList: Listable[] = [];
    public minuteList: Listable[] = [];

    public time: Time = {
        hours: 0,
        minutes: 0
    };

    get hours(): string {
        return String(this.time.hours).padStart(2, '0')
    }

    get minutes(): string {
        return String(this.time.minutes).padStart(2, '0')
    }

    setHours(hour: number) {
        this.time.hours = hour;
        this.onChange.emit(this.time);
    }

    setMinutes(minutes: number) {
        this.time.minutes = minutes;
        this.onChange.emit(this.time);
    }

    constructor(
        public iconService: IconService
    ) {}

    public ngOnInit(): void {
        this.initializeOptions();
    }

    private initializeOptions() {
        for (let i = 0; i <= MINUTE_SELECTOR_LIMIT; i++)
            this.minuteList.push({displayName: String(i), value: i});
        for (let i = 0; i <= HOUR_SELECTOR_LIMIT; i++)
            this.hourList.push({displayName: String(i), value: i});
    }
}