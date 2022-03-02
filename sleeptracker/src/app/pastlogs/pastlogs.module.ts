import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastlogsPageRoutingModule } from './pastlogs-routing.module';

import { PastlogsPage } from './pastlogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastlogsPageRoutingModule
  ],
  declarations: [PastlogsPage]
})
export class PastlogsPageModule {}
