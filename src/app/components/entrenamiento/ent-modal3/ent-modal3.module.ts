import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntModal3PageRoutingModule } from './ent-modal3-routing.module';

import { EntModal3Page } from './ent-modal3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntModal3PageRoutingModule
  ],
  declarations: [EntModal3Page]
})
export class EntModal3PageModule {}
