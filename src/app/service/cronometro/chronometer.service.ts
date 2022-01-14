import { Injectable } from '@angular/core';
import { Chronometer } from 'src/app/telas/cronometro/model/chronometer';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ChronometerService {

  public globalChronometer: Subject<Chronometer> = new Subject<Chronometer>();

  private innerChronometer: Chronometer = new Chronometer();
  private onGoingTimeCount = 0;
  private timeInterval: any;

  constructor(
  ) {}

  public startCounting(): void {
    this.timeInterval = setInterval(() => {
      this.onGoingTimeCount++;
      this.innerChronometer = new Chronometer(true, this.onGoingTimeCount);
      this.globalChronometer.next(this.innerChronometer);
    }, 1000);
  }

  public pauseCounting(): void {
    clearInterval(this.timeInterval);
    this.innerChronometer = new Chronometer(false, this.onGoingTimeCount);
    this.globalChronometer.next(this.innerChronometer);
  }

  public stopCounting(): void {
    clearInterval(this.timeInterval);
    this.onGoingTimeCount = 0;
    this.innerChronometer = new Chronometer();
    this.globalChronometer.next(this.innerChronometer);
  }

  public getOnGoingChronometer(): Chronometer {
    return this.innerChronometer;
  }
}
