import { SharedModule } from './base/shared.module';
import { CronometroModule } from './telas/cronometro/cronometro.module';
import { AppNavComponent } from './base/app-nav/app-nav.component';
import { RelogioModule } from './telas/relogio/relogio.module';
import { AppRoutingModule } from './app-rouing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LoadingOverlayComponent } from './base/loading/app-loading.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    LoadingOverlayComponent
  ],
  imports: [
    BrowserModule,
    RelogioModule,
    CronometroModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [{provide:LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
