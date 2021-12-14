import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntModal2Page } from './ent-modal2.page';

const routes: Routes = [
  {
    path: '',
    component: EntModal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntModal2PageRoutingModule {}
