import { LoadingService } from './../../base/loading/loading.service';
import { TimeService } from '../../service/base/time.service';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent implements OnInit, DoCheck {

  public hora: Date;

  constructor(
    private horaService: TimeService,
    private loadingService: LoadingService
  ) {
  }

  public ngDoCheck(): void {
      if (!this.hora) {
        this.loadingService.startLoading();
      } else {
        this.loadingService.stopLoading();
      }
  }

  public ngOnInit(): void {
    this.horaService.hora.subscribe(hora => {
      this.hora = hora;
    });
  }

}
