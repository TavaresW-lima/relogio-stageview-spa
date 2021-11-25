import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class HoraService {

  public hora: Subject<Date> = new Subject<Date>();

  public atualizaRelogio(): void {
    setInterval(() => {
      this.hora.next(new Date());
    }, 1000);
  }
}
