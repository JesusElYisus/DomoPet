import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentacionPagePage } from './alimentacion-page.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentacionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentacionPagePageRoutingModule {}
