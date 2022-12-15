import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    template: `
        <div class="container py-4">
            <div class="row no-gutters d-flex align-items-center justify-content-center">
            <div class="col-6 pr-2 d-flex flex-column align-items-center">
                <span class="minutes_label clock-font">
                    {{ minutes | number: '2.0'}}
                </span>
                <span class="range_ends_label text-muted">
                    <span>{{rangeStart}}</span>
                    <span>{{rangeEnd}}</span>
                </span>
                <input 
                    class="range_input w-100"
                    type="range" 
                    [min]="rangeStart"
                    [max]="rangeEnd"
                    step="1"
                    id="minutes"
                    [(ngModel)]="minutes"
                />
                <label for="minutes">
                    Minutos
                </label>
            </div>
            <div class="col-3">
                <button role="button" class="btn btn-primary btn-lg btn-block" 
                        (click)="activeModal.close(minutes)"
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
    `,
    styleUrls: ['time-picker-modal.component.scss']
})
export class ChronometerTimePickerModalComponent {

    public minutes: number = 0;

    public rangeStart = 0;
    public rangeEnd = 59;

    constructor(
       public activeModal: NgbActiveModal
    ) {
    }
}