import { IconService } from './../../service/base/icon.service';
import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

  public loading: boolean = true;

  constructor(
    private loadingService: LoadingService,
    public iconService: IconService
  ) {}

  public ngOnInit(): void {
      this.loadingService.loading.subscribe( loading => {
        console.log("LOADING ", loading);
        this.loading = loading;
      });
  }

}
