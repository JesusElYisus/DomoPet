import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionPagePage } from './ubicacion-page.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionPagePageRoutingModule {}
