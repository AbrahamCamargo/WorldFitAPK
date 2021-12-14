import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntModal5PageRoutingModule } from './ent-modal5-routing.module';

import { EntModal5Page } from './ent-modal5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntModal5PageRoutingModule
  ],
  declarations: [EntModal5Page]
})
export class EntModal5PageModule {}
