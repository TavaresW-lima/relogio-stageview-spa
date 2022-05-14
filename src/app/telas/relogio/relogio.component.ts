import { TimeService } from '../../service/base/time/time.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent implements OnInit {

  public hora$: Observable<Date>;

  constructor(
    private horaService: TimeService
  ) {
  }

  public ngOnInit(): void {
    this.hora$ = this.horaService.hora.asObservable();
  }

}
