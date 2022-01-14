import { Injectable } from "@angular/core";
import { interval, Observable, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TimeService {

  public timeTick: Observable<number> = interval(1000);
  public hora: Subject<Date> = new Subject<Date>();

  constructor() {}

  public atualizaRelogio(): void {
    this.timeTick.subscribe( () => {
      this.hora.next(new Date());
    });
  }
}
