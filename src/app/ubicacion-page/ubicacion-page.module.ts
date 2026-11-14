import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { UbicacionPagePageRoutingModule } from './ubicacion-page-routing.module';

import { UbicacionPagePage } from './ubicacion-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionPagePageRoutingModule
  ],
  declarations: [UbicacionPagePage]
})
export class UbicacionPagePageModule {}
