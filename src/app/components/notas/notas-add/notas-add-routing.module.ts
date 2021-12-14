import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasAddPage } from './notas-add.page';

const routes: Routes = [
  {
    path: '',
    component: NotasAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasAddPageRoutingModule {}
