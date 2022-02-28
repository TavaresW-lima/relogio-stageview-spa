import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    template: `
        <div class="container py-4">
            <div class="row no-gutters d-flex justify-content-center">
            <div class="col-6 pr-2">
                <app-time-picker
                    (onChange)="setTime($event)"
                ></app-time-picker>
            </div>
            <div class="col-3">
                <button role="button" class="btn btn-primary btn-lg btn-block" 
                        (click)="activeModal.close(time)"
                >
                    OK
                </button>
            </div>
            <div class="col-3 pl-1">
                <button role="button" class="btn btn-outline-secondary btn-lg btn-block"
                        (click)="activeModal.dismiss()"
                >
                    Cancelar
                </button>
            </div>
            </div>
        </div>
    `
})
export class ChronometerTimePickerModalComponent {

    public time: Time = {hours: 0, minutes: 0};

    public setTime(time: Time) {
        this.time = time;
    }

    constructor(
       public activeModal: NgbActiveModal
    ) {
    }
}