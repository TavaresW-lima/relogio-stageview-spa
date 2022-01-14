import { LoadingService } from './../../base/loading/loading.service';
import { TimeService } from './../../service/base/time.service';
import { Chronometer } from './model/chronometer';
import { ChronometerService } from './../../service/cronometro/chronometer.service';
import { IconService } from './../../service/base/icon.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StringUtils } from 'src/app/base/utils/stringUtils';

@Component({
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {

  public chronometer: Chronometer;
  public counting: boolean;

  constructor(
    public iconService: IconService,
    public chronometerService: ChronometerService,
    public loadingService: LoadingService
  ) {
  }

  public ngOnInit(): void {
    this.chronometer = this.chronometerService.getOnGoingChronometer();
    this.counting = this.chronometer.counting;
    this.chronometerService.globalChronometer.subscribe( () => {
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

  public getChronometerAsString(chronometer: Chronometer): string {
    return `${StringUtils.leftZeroPad(chronometer.getHour(), 2)}:${StringUtils.leftZeroPad(chronometer.getMinute(), 2)}:${StringUtils.leftZeroPad(chronometer.getSecond(), 2)}`;
  }
}
