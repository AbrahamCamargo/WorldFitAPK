import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasAddPageRoutingModule } from './notas-add-routing.module';

import { NotasAddPage } from './notas-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasAddPageRoutingModule
  ],
  declarations: [NotasAddPage]
})
export class NotasAddPageModule {}
