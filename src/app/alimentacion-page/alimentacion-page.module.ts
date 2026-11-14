import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { AlimentacionPagePageRoutingModule } from './alimentacion-page-routing.module';

import { AlimentacionPagePage } from './alimentacion-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentacionPagePageRoutingModule
  ],
  declarations: [AlimentacionPagePage]
})
export class AlimentacionPagePageModule {}
