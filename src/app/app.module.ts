import { AppNavComponent } from './base/app-nav/app-nav.component';
import { RelogioModule } from './telas/relogio/relogio.module';
import { AppRoutingModule } from './app-rouing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    RelogioModule,
    AppRoutingModule,
  ],
  providers: [{provide:LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
