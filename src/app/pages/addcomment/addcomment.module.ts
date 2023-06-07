import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcommentPageRoutingModule } from './addcomment-routing.module';

import { AddcommentPage } from './addcomment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcommentPageRoutingModule
  ],
  declarations: [AddcommentPage]
})
export class AddcommentPageModule {}
