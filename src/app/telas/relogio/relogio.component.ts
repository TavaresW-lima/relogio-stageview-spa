import { HoraService } from './../../service/hora.service';
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})
export class RelogioComponeent implements OnInit {

  public hora: Date;

  constructor(
    private horaService: HoraService
  ) {
  }

  public ngOnInit(): void {
    this.horaService.hora.subscribe(hora => {
      this.hora = hora;
    })
  }

}
