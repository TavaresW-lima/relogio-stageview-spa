import { Component, Input } from "@angular/core";
import { ItemMenu } from "src/app/model/itemMenu";
import { AppNavService } from "src/app/service/base/nav/app-nav.service";
import { IconService } from '../../service/base/icon/icon.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {

  @Input() public itensMenu: ItemMenu[];
  @Input() public aberto: boolean = false;

  constructor(
    private navService: AppNavService,
    public iconService: IconService
  ) {}

  public selecionaItemMenu(item: ItemMenu) {
    this.navService.selecionaItemMenu(item);
  }

  public isOpcaoMenuSelecionada(item: ItemMenu) {
    return item == this.navService.itemMenuSelecionado;
  }


}
