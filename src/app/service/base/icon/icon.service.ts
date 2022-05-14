import { Injectable } from "@angular/core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

@Injectable({providedIn: 'root'})
export class IconService {
  public cronometro = solidIcons.faStopwatch;
  public relogio = solidIcons.faClock;
  public play = solidIcons.faPlay;
  public stop = solidIcons.faStop;
  public pause = solidIcons.faPause;
  public carregando = solidIcons.faCircleNotch;
  public editar = solidIcons.faEdit;

  public setaDireita = solidIcons.faChevronRight;
  public setaEsquerda = solidIcons.faChevronLeft;
}
