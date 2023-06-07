import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItempagePage } from './itempage.page';

const routes: Routes = [
  {
    path: '',
    component: ItempagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItempagePageRoutingModule {}
