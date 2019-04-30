import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowItWorksRoutingModule } from './how-it-works-routing.module';
import { HowItWorksComponent } from './how-it-works.component';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [HowItWorksComponent],
  imports: [CommonModule, HowItWorksRoutingModule, SharedModule, MaterialModule]
})
export class HowItWorksModule {}
