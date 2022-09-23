import { NgModule } from '@angular/core';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { AngularContainerComponent } from './angular-container/angular-container.component';
import { AngularHomepageComponent } from './angular-homepage/angular-homepage.component';
import { AngularRoutingModule } from './angular-routing.module';

@NgModule({
  declarations: [AngularContainerComponent, AngularHomepageComponent],
  imports: [AngularRoutingModule, SharedModule, MaterialModule]
})
export class AngularModule {}
