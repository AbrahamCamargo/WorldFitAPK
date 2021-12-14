import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotivacionPage } from './motivacion.page';

const routes: Routes = [
  {
    path: '',
    component: MotivacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotivacionPageRoutingModule {}
