import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcommentPage } from './addcomment.page';

const routes: Routes = [
  {
    path: '',
    component: AddcommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcommentPageRoutingModule {}
