import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntModal3Page } from './ent-modal3.page';

const routes: Routes = [
  {
    path: '',
    component: EntModal3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntModal3PageRoutingModule {}
