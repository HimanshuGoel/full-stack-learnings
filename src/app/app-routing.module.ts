import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular',
    pathMatch: 'full',
  },
  {
    path: 'angular',
    loadChildren: () =>
      import('./features/angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: 'typescript',
    loadChildren: () =>
      import('./features/typescript/typescript.module').then(
        (m) => m.TypescriptModule
      ),
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  exports: [],
})
export class AppRoutingModule {}
