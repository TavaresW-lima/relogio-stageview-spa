import { RelogioComponeent } from './telas/relogio/relogio.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const rotas: Routes = [
  {
    path:'**',
    redirectTo: 'relogio'
  },
  {
    path: 'relogio',
    component: RelogioComponeent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
