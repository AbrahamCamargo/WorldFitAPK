import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntModal2PageRoutingModule } from './ent-modal2-routing.module';

import { EntModal2Page } from './ent-modal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntModal2PageRoutingModule
  ],
  declarations: [EntModal2Page]
})
export class EntModal2PageModule {}
