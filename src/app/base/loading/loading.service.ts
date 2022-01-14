import { IconService } from './../../service/base/icon.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoadingService {

  private _loading: boolean = false;
  public loading: Subject<boolean> = new Subject<boolean>();

  startLoading(): void {
    this._loading = true;
    this.loading.next(this._loading);
  }

  stopLoading(): void {
    this._loading = false;
    this.loading.next(this._loading);
  }
}
