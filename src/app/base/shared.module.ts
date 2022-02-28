import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ]
})
export class SharedModule {

}
