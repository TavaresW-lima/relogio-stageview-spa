import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, interval, Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { DateTimeJsonResponse } from '../../../model/date-time-json-response';

@Injectable({providedIn: 'root'})
export class TimeService {

  readonly WORLD_TIME_API_URL = 'https://worldtimeapi.org/api';

  public actualTimeZone: string;

  private baseTime: Date;
  public timeTick: Observable<number> = interval(1000);
  public hora: BehaviorSubject<Date> = new BehaviorSubject(new Date());

  constructor(
    private http: HttpClient
  ) {}

  public initializeClock(): void {
    const url = `${this.WORLD_TIME_API_URL}/ip`
    this.http.get<DateTimeJsonResponse>(url)
          .subscribe(time => {
            this.baseTime = new Date(time.datetime);
            this.atualizaRelogio();
          });
  }

  public atualizaRelogio(): void {
    this.timeTick.subscribe(() => {
      const mili = this.baseTime.getTime()
      this.baseTime = new Date(mili + 1000);
      this.hora.next(this.baseTime);
    })
  }

  public getRegionalAreaList(area: string): Observable<string[]> {
    const url = `${this.WORLD_TIME_API_URL}/timezones/${area}`;
    const regionTimezones$ = this.http.get<string[]>(url).pipe(
      map(regions => regions.map(region => region.split('/')[1]))
    )
    return regionTimezones$;
  }
}
