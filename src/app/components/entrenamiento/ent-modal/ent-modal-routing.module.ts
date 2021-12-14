import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntModalPage } from './ent-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EntModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntModalPageRoutingModule {}
