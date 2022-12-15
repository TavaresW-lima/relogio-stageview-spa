import { Chronometer } from './model/chronometer';
import { ChronometerService } from './../../service/cronometro/chronometer.service';
import { IconService } from '../../service/base/icon/icon.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ChronometerTimePickerModalComponent } from './time-picker-modal/time-picker-modal.component';

@Component({
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss'],
})
export class CronometroComponent implements OnInit, OnDestroy {
  public chronometer: Chronometer;
  public counting: boolean;
  public modalRef: NgbModalRef;

  constructor(
    public iconService: IconService,
    public chronometerService: ChronometerService,
    public modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.chronometer = this.chronometerService.getOnGoingChronometer();
    this.counting = this.chronometer.counting;
    this.chronometerService.globalChronometer.subscribe(() => {
      this.chronometer = this.chronometerService.getOnGoingChronometer();
    });
  }

  public startCronometro(): void {
    this.counting = true;
    this.chronometerService.startCounting();
  }

  public pauseCronometro(): void {
    this.counting = false;
    this.chronometerService.pauseCounting();
  }

  public stopCronometro(): void {
    this.chronometer = new Chronometer();
    this.counting = false;
    this.chronometerService.stopCounting();
  }

  public editaCronometro(): void {
    this.modalRef = this.modalService.open(
      ChronometerTimePickerModalComponent,
      {
        centered: true,
        animation: true,
        backdrop: 'static',
      }
    );

    this.modalRef.result
      .then((minutes) => {
        this.chronometer = this.minutesToChronometer(minutes);
        this.chronometerService.setInnerChronometer(this.chronometer);
      })
      .catch(() => {});
  }

  private minutesToChronometer(minutes: number): Chronometer {
    const minutesInSeconds = minutes * 60;
    return new Chronometer(false, minutesInSeconds);
  }

  ngOnDestroy() {
    if (this.modalRef) this.modalRef.close();
  }
}
