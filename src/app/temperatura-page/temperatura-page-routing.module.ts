import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperaturaPagePage } from './temperatura-page.page';

const routes: Routes = [
  {
    path: '',
    component: TemperaturaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperaturaPagePageRoutingModule {}
