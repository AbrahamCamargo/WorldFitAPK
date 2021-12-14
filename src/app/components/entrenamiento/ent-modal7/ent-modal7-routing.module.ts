import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntModal7Page } from './ent-modal7.page';

const routes: Routes = [
  {
    path: '',
    component: EntModal7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntModal7PageRoutingModule {}
