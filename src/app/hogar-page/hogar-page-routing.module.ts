import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HogarPagePage } from './hogar-page.page';

const routes: Routes = [
  {
    path: '',
    component: HogarPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HogarPagePageRoutingModule {}
