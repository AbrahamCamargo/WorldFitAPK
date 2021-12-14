import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioIndPage } from './ejercicio-ind.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioIndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioIndPageRoutingModule {}
