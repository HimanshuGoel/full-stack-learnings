import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypescriptContainerComponent } from './typescript-container/typescript-container.component';
import { TypescriptHomepageComponent } from './typescript-homepage/typescript-homepage.component';

const routes: Routes = [
  {
    path: '',
    component: TypescriptContainerComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: TypescriptHomepageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypescriptRoutingModule {}
