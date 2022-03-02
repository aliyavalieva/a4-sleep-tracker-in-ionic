import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastlogsPage } from './pastlogs.page';

const routes: Routes = [
  {
    path: '',
    component: PastlogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastlogsPageRoutingModule {}
