import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ColorearUltimoAgregadoDirective } from './colorear-ultimo-agregado.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    ColorearUltimoAgregadoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    ColorearUltimoAgregadoDirective
  ]
})
export class SharedModule { }
