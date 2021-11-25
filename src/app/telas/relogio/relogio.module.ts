import { CommonModule } from '@angular/common';
import { RelogioComponeent as RelogioComponent } from './relogio.component';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule],
  declarations: [RelogioComponent],
  exports: [RelogioComponent]
})
export class RelogioModule {

}
