import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntModal6PageRoutingModule } from './ent-modal6-routing.module';

import { EntModal6Page } from './ent-modal6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntModal6PageRoutingModule
  ],
  declarations: [EntModal6Page]
})
export class EntModal6PageModule {}
