import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BajaAlumnosComponent } from './baja-alumnos.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    BajaAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    BajaAlumnosComponent
  ]
})
export class BajaAlumnosModule { }
