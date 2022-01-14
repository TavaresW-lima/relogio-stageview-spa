import { Component, Input } from "@angular/core";
import { ItemMenu } from "src/app/model/itemMenu";
import { AppNavService } from "src/app/service/base/app-nav.service";

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {

  @Input() public itensMenu: ItemMenu[];


  constructor(
    private navService: AppNavService
  ) {}

  public selecionaItemMenu(item: ItemMenu) {
    this.navService.selecionaItemMenu(item);
  }

  public isOpcaoMenuSelecionada(item: ItemMenu) {
    return item == this.navService.itemMenuSelecionado;
  }


}
