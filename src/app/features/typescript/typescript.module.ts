import { NgModule } from '@angular/core';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { TypescriptContainerComponent } from './typescript-container/typescript-container.component';
import { TypescriptHomepageComponent } from './typescript-homepage/typescript-homepage.component';
import { TypescriptRoutingModule } from './typescript-routing.module';

@NgModule({
  declarations: [TypescriptContainerComponent, TypescriptHomepageComponent],
  imports: [TypescriptRoutingModule, SharedModule, MaterialModule],
})
export class TypescriptModule {}
