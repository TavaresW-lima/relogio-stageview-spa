import { CronometroComponent } from './telas/cronometro/cronometro.component';
import { RelogioComponent as RelogioComponent } from './telas/relogio/relogio.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const rotas: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'relogio'
  },
  {
    path: 'relogio',
    component: RelogioComponent,
  
  },
  {
    path: 'cronometro',
    component: CronometroComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
