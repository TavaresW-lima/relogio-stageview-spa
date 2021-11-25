import { HoraService } from './service/hora.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'relogio-stageview-spa';

  constructor(
    private horaService: HoraService
  ) {
  }

  public ngOnInit() {
    this.horaService.atualizaRelogio();
  }

}
