import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'alimentacion-page',
    loadChildren: () => import('./alimentacion-page/alimentacion-page.module').then( m => m.AlimentacionPagePageModule)
  },
  {
    path: 'temperatura-page',
    loadChildren: () => import('./temperatura-page/temperatura-page.module').then( m => m.TemperaturaPagePageModule)
  },
  {
    path: 'ubicacion-page',
    loadChildren: () => import('./ubicacion-page/ubicacion-page.module').then( m => m.UbicacionPagePageModule)
  },
  {
    path: 'hogar-page',
    loadChildren: () => import('./hogar-page/hogar-page.module').then( m => m.HogarPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
