import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { HogarPagePageRoutingModule } from './hogar-page-routing.module';

import { HogarPagePage } from './hogar-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HogarPagePageRoutingModule
  ],
  declarations: [HogarPagePage]
})
export class HogarPagePageModule {}
