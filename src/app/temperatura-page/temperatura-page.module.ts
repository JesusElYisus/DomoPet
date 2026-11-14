import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { TemperaturaPagePageRoutingModule } from './temperatura-page-routing.module';

import { TemperaturaPagePage } from './temperatura-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperaturaPagePageRoutingModule
  ],
  declarations: [TemperaturaPagePage]
})
export class TemperaturaPagePageModule {}
