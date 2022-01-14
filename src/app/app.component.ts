import { AppNavService } from 'src/app/service/base/app-nav.service';
import { TimeService } from './service/base/time.service';
import { Component, OnInit } from '@angular/core';
import { ItemMenu } from './model/itemMenu';
import { faClock, faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Relógio';
  public itensMenu: ItemMenu[] = [
    {
      icone: faClock,
      label: 'Relógio',
      rota: 'relogio'
    },
    {
      icone: faStopwatch,
      label: 'Cronômetro',
      rota: 'cronometro'
    }
  ]

  constructor(
    private horaService: TimeService,
    private navService: AppNavService
  ) {
  }

  public ngOnInit() {
    this.horaService.atualizaRelogio();
    this.navService.selecionaItemMenu(this.itensMenu[0]);
  }

}
