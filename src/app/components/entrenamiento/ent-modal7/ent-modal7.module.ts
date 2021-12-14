import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntModal7PageRoutingModule } from './ent-modal7-routing.module';

import { EntModal7Page } from './ent-modal7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntModal7PageRoutingModule
  ],
  declarations: [EntModal7Page]
})
export class EntModal7PageModule {}
