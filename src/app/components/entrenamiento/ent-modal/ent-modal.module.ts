import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntModalPageRoutingModule } from './ent-modal-routing.module';

import { EntModalPage } from './ent-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntModalPageRoutingModule
  ],
  declarations: [EntModalPage]
})
export class EntModalPageModule {}
