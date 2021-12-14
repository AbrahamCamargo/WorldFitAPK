import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioIndPageRoutingModule } from './ejercicio-ind-routing.module';

import { EjercicioIndPage } from './ejercicio-ind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercicioIndPageRoutingModule
  ],
  declarations: [EjercicioIndPage]
})
export class EjercicioIndPageModule {}
