import { Injectable } from "@angular/core";
import {
  faStopwatch,
  faClock,
  faPlay,
  faStop,
  faPause,
  faCircleNotch,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

@Injectable({providedIn: 'root'})
export class IconService {
  public faStopwatch = faStopwatch;
  public faClock = faClock;
  public faPlay = faPlay;
  public faStop = faStop;
  public faPause = faPause;
  public faCircleNotch = faCircleNotch;
  public faEdit = faEdit;
}
