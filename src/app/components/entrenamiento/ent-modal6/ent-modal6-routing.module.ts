import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntModal6Page } from './ent-modal6.page';

const routes: Routes = [
  {
    path: '',
    component: EntModal6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntModal6PageRoutingModule {}
