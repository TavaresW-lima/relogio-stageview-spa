import { ItemMenu } from 'src/app/model/itemMenu';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AppNavService {

  public itemMenuSelecionado: ItemMenu;

  constructor(
    private router: Router
  ) {
  }

  public selecionaItemMenu(item: ItemMenu) {
    this.itemMenuSelecionado = item;
    this.navegaParaRota(item.rota);
  }

  private navegaParaRota(rota:string): void {
    this.router.navigate([rota]);
  }

}
