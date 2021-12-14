import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntModal5Page } from './ent-modal5.page';

const routes: Routes = [
  {
    path: '',
    component: EntModal5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntModal5PageRoutingModule {}
