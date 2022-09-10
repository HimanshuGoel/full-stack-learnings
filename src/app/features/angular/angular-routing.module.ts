import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularContainerComponent } from './angular-container/angular-container.component';
import { AngularHomepageComponent } from './angular-homepage/angular-homepage.component';

const routes: Routes = [
  {
    path: '',
    component: AngularContainerComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: AngularHomepageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
