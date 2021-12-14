import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotivacionPageRoutingModule } from './motivacion-routing.module';

import { MotivacionPage } from './motivacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotivacionPageRoutingModule
  ],
  declarations: [MotivacionPage]
})
export class MotivacionPageModule {}
