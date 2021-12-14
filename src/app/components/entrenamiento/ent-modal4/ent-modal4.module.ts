import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntModal4PageRoutingModule } from './ent-modal4-routing.module';

import { EntModal4Page } from './ent-modal4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntModal4PageRoutingModule
  ],
  declarations: [EntModal4Page]
})
export class EntModal4PageModule {}
